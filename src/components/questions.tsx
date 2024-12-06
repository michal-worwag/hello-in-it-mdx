import Link from 'next/link';
import { getQuestions } from '../libs/get-questions';

export async function Questions({ category }: { category: string }) {
  const questions = await getQuestions(category);
  return (
    <>
      {questions.length ? (
        <ol className='text-gray-800 list-decimal pl-5 space-y-2'>
          {questions.map(({ slug, title, publishDate, description }) => (
            <li key={slug} className='pl-1'>
              <h2 className='text-gray-800 text-lg font-medium mt-8 mb-3'>
                <Link
                  href={`/questions/javascript/${slug}`}
                  className='text-blue-500 hover:text-blue-700'
                >
                  {title}
                </Link>
              </h2>
              <p className='text-gray-800 leading-snug'>{description}</p>
              <p className='text-gray-800 leading-snug mt-2'>
                Published:
                {new Date(publishDate).toLocaleDateString()}{' '}
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p>Sorry :( No questions found</p>
      )}
    </>
  );
}
