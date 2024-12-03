import { Link } from 'next-view-transitions';

export default function Header() {
  return (
    <div>
      <Link href='/' className='font-bold text-lg'>
        HelloIn.IT
      </Link>
    </div>
  );
}
