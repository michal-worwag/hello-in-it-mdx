'use client';

export default function Published({ date }: { date: string }) {
  const newDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat(navigator.language).format(
    newDate
  );
  return (
    <p className='text-gray-800 leading-snug mt-2'>
      Published: {formattedDate}
    </p>
  );
}
