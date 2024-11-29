import { getDestinations } from '@/prisma/repositories/destinations'
import { DestinationsList } from './destination-list'

export default async function DestinationsPage() {
  const destinations = await getDestinations()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Destinations</h1>
      <DestinationsList initialDestinations={destinations} />
    </main>
  )
}

