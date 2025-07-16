import { newsItems } from '@/data/news';

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}