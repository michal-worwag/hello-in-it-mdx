import { readdir } from 'fs/promises';

export async function getQuestions(category: string): Promise<any[]> {
  const slugs = (
    await readdir(`./src/app/questions/${category}`, { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const questions = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/questions/${category}/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    })
  );

  questions.sort((a, b) => b.slug - a.slug);

  return questions;
}
