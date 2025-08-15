import { getAllInfectiousTests } from '@/data/infection';

export async function generateStaticParams() {
  const tests = getAllInfectiousTests();
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