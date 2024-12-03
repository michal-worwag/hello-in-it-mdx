import { readdir } from "fs/promises";

export async function getJSQuestions(): Promise<any[]> {
  const categories = (
    await readdir("./src/app/questions", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  console.log("Categories", categories);
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/questions/javascript", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const filePath = `@/src/app/questions/javascript/${name}/page.mdx`;

      try {
        const { metadata } = await import(filePath);
        return { slug: name, ...metadata };
      } catch (error) {
        console.error(`Failed to load module at ${filePath}`, error);
        return { slug: name };
      }
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
