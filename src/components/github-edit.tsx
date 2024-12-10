export default function GithubEdit({ link }: { link: string }) {
  return (
    <div className='flex justify-end mt-8'>
      <a
        href={`https://github.com/michal-worwag/hello-in-it-mdx/blob/main/src/app${link}`}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 hover:text-blue-800'
      >
        Edit this page on Github
      </a>
    </div>
  );
}
