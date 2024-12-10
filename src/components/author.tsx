type AuthorProps = {
  author: {
    name: string;
    url?: string;
  };
};

export default function Author({ author }: AuthorProps) {
  const { name, url } = author;
  return (
    <p className='text-sm'>
      {' '}
      By{' '}
      {name && url ? (
        <a
          className='text-blue-600 hover:text-blue-800'
          href={url}
          target='_blank'
        >
          {name}
        </a>
      ) : (
        <>{name}</>
      )}
    </p>
  );
}
