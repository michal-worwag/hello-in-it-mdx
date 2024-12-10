import Link from 'next/link';
import { getQuestionCategories } from '../libs/questionCategories';

export async function QuestionCategories() {
  const categories = await getQuestionCategories();
  return (
    <ol className='text-gray-800 list-decimal pl-7 space-y-2'>
      {categories.map(({ slug, title }) => (
        <li key={slug} className='pl-1'>
          <Link
            href={`/questions/${slug}`}
            className='text-blue-600 hover:text-blue-800'
          >
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );
}
