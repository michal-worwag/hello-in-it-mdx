import Link from "next/link";
import { getQuestionCategories } from "../libs/questionCategories";

export async function Categories() {
  const categories = await getQuestionCategories();
  return (
    <ol>
      {categories.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/questions/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(publishDate).toLocaleDateString()}{" "}
          </p>
        </li>
      ))}
    </ol>
  );
}
