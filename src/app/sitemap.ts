import { promises as fs } from 'fs';
import path from 'path';

async function getQuestionSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
    recursive: true,
  });

  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export default async function sitemap() {
  const questionsDirectory = path.join(process.cwd(), 'src/app', 'questions');
  const slugs = await getQuestionSlugs(questionsDirectory);

  const questions = slugs.map((slug) => ({
    url: `https://helloin.it/questions/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...questions];
}
