import Link from 'next/link';
import { getQuestions } from '../libs/get-questions';
import Published from './published';

export async function Questions({ category }: { category: string }) {
  const questions = await getQuestions(category);
  return (
    <>
      {questions.length ? (
        <ol className='text-gray-800 list-decimal pl-5 space-y-2'>
          {questions.map(({ slug, title }) => (
            <li key={slug} className='pl-1'>
              <h2 className='text-gray-800 text-lg font-medium mt-8 mb-3'>
                <Link
                  href={`/questions/${category}/${slug}`}
                  className='text-blue-500 hover:text-blue-700'
                >
                  {title}
                </Link>
              </h2>
            </li>
          ))}
        </ol>
      ) : (
        <p>Sorry :( No questions found</p>
      )}
    </>
  );
}
