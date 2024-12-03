import BackBtn from '@/src/components/back-btn';

export default function QuestionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackBtn />
      {children}
    </>
  );
}
