import { readdir } from 'fs/promises';

export async function getQuestions(category: string): Promise<any[]> {
  const slugs = (
    await readdir(`./src/app/questions/${category}`, { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const filePath = `@/src/app/questions/${category}/${name}/page.mdx`;

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
