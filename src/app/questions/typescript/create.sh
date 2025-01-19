#!/bin/bash

# Ścieżka do pliku JSON
JSON_FILE="data.json"

# Sprawdzenie, czy plik JSON istnieje
if [[ ! -f "$JSON_FILE" ]]; then
  echo "Plik $JSON_FILE nie istnieje. Upewnij się, że podałeś właściwą ścieżkę."
  exit 1
fi

# Sprawdzenie, czy jq jest zainstalowane
if ! command -v jq &> /dev/null; then
  echo "Narzędzie 'jq' nie jest zainstalowane. Zainstaluj je przed uruchomieniem skryptu."
  exit 1
fi

# Iteracja po obiektach JSON i tworzenie plików
echo "Tworzenie katalogów i plików..."

jq -c '.[]' "$JSON_FILE" | while read -r ITEM; do
  SLUG=$(echo "$ITEM" | jq -r '.slug')
  TITLE=$(echo "$ITEM" | jq -r '.title')

  if [[ -n "$SLUG" && -n "$TITLE" ]]; then
    # Tworzenie katalogu
    mkdir -p "$SLUG"

    # Ścieżka do pliku page.mdx
    PAGE_FILE="$SLUG/page.mdx"

    # Tworzenie pliku z wymaganym formatem
    if [[ ! -f "$PAGE_FILE" ]]; then
      echo "Tworzę plik: $PAGE_FILE"
      cat > "$PAGE_FILE" <<EOF
import GithubEdit from '@/components/github-edit';

export const metadata = {
  title: '$TITLE',
  alternates: {
    canonical:
      '/questions/typescript/$SLUG',
  },
};

# $TITLE

<GithubEdit link='/questions/typescript/$SLUG/page.mdx' />

EOF
    else
      echo "Plik $PAGE_FILE już istnieje, pomijam."
    fi
  fi
done

echo "Gotowe!"
