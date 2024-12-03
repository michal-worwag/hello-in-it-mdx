import { Posts } from "@/src/components/questions";
import { getJSQuestions } from "@/src/libs/javascript";

export default async function Home() {
  const posts = await getJSQuestions();

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <Posts posts={posts} />
    </main>
  );
}
