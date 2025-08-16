import { getAllMaternalChildTests } from '@/data/mother_child';

export async function generateStaticParams() {
  const tests = getAllMaternalChildTests();
  return tests.map((test) => ({
    id: test.id,
  }));
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}