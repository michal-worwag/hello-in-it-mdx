import { readdir } from "fs/promises";

export async function getQuestionCategories(): Promise<any[]> {
  const categories = (
    await readdir("./src/app/questions", { withFileTypes: true })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const sortedCategories = await Promise.all(
    categories.map(async (category) => {
      const filePath = `@/src/app/questions/${category}/page.tsx`;

      try {
        const { metadata } = await import(filePath);
        return { slug: category, ...metadata };
      } catch (error) {
        console.error(`Failed to load module at ${filePath}`, error);
        return { slug: category };
      }
    })
  );

  sortedCategories.sort((a, b) => +new Date(b.slug) - +new Date(a.slug));

  return sortedCategories;
}
