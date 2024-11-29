import { notFound } from 'next/navigation'
import { getDestinationBySlug } from '@/prisma/repositories/destinations'
import { DestinationView } from './destination-view'

export default async function DestinationPage({
  params
}: {
  params: { slug: string }
}) {
  const destination = await getDestinationBySlug(params.slug)

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

