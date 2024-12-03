import Link from "next/link";

export function Posts({ posts }: { posts: any[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/questions/javascript/${slug}`}>{title}</Link>
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
