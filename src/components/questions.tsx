import Link from 'next/link';
import { getQuestions } from '../libs/get-questions';
import Author from './author';

export async function Questions({ category }: { category: string }) {
  const questions = await getQuestions(category);
  return (
    <>
      {questions.length ? (
        <ol className='text-gray-800 list-decimal pl-7 space-y-2'>
          {questions.map(({ slug, title, author }) => (
            <li key={slug} className='pl-1'>
              <p className='text-gray-800 text-lg font-medium mt-5 mb-2'>
                <Link
                  href={`/questions/${category}/${slug}`}
                  className='text-blue-600 hover:text-blue-800'
                >
                  {title}
                </Link>
              </p>
              {author && <Author author={author} />}
            </li>
          ))}
        </ol>
      ) : (
        <p>Sorry :( No questions found</p>
      )}
    </>
  );
}
