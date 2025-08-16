import { getAllGastrointestinalTests } from '@/data/gastrointestinal';

export async function generateStaticParams() {
  const tests = getAllGastrointestinalTests();
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