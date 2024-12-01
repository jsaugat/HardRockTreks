import { notFound } from 'next/navigation';
import { getDestinationBySlug } from '@/prisma/repositories/destinations';
import { DestinationView } from './destination-view';

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const destination = await getDestinationBySlug(slug);
  console.log({ destination })

  if (!destination) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <DestinationView
        initialDestination={destination}
      />
    </main>
  )
}

