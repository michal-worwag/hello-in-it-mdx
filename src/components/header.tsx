import { Link } from 'next-view-transitions';
import GithubIcon from './github-icon';

export default function Header() {
  return (
    <div className='flex justify-between items-center gap-4'>
      <Link href='/' className='font-bold text-lg'>
        HelloIn.IT
      </Link>
      <a
        href='https://github.com/michal-worwag/hello-in-it-mdx'
        target='_blank'
        title='Link to GitHub repository'
        rel='noopener noreferrer'
      >
        <GithubIcon />
      </a>
    </div>
  );
}
