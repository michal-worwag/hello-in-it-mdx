import { readdir } from 'fs/promises';

export async function getQuestionCategories(): Promise<any[]> {
  const categories = (
    await readdir('./src/app/questions', { withFileTypes: true })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const sortedCategories = await Promise.all(
    categories.map(async (category) => {
      const { metadata } = await import(
        `../app/questions/${category}/page.mdx`
      );
      return { slug: category, ...metadata };
    })
  );

  sortedCategories.sort((a, b) => b.slug - a.slug);

  return sortedCategories;
}
