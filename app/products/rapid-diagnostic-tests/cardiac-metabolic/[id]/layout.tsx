import { getAllMetobalictestinalTests } from '@/data/metobalic';

export async function generateStaticParams() {
  const tests = getAllMetobalictestinalTests();
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