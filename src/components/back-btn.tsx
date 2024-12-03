'use client';

import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <button
      onClick={handleBackClick}
      className='cursor-pointer text-gray-800 transition-colors hover:text-gray-900'
    >
      Go back
    </button>
  );
}
