'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { getDestinationBySlug } from '@/prisma/repositories/destinations'
import type { Activity, Destination } from '@/lib/zod/destinations'

export function DestinationView({
  initialDestination
}: {
  initialDestination: Destination & {
    activities: Activity[]
  }
}) {
  const { data: destination } = useQuery({
    queryKey: ['destination', initialDestination.slug],
    queryFn: () => getDestinationBySlug(initialDestination.slug),
    initialData: initialDestination,
  })

  if (!destination) {
    return null
  }

  return (
    <div className="space-y-8">
      <div className="relative h-[400px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.slug}`}
              className="group block"
            >
              <Image
                src={activity.image}
                alt={activity.name}
                width={300}
                height={200}
                className="rounded-lg mb-2"
              />
              <h3 className="font-semibold group-hover:underline">
                {activity.name}
              </h3>
              <p className="text-sm text-gray-600">
                10 packages
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

