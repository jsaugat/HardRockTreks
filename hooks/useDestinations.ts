'use client'

import { useQuery } from '@tanstack/react-query'
import { getDestinations, getDestinationBySlug, getActivitiesByDestination, getPackagesByDestination } from '@/prisma/repositories/destinations'

export function useDestinations() {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
  })
}

export function useDestinationBySlug(slug: string) {
  return useQuery({
    queryKey: ['destination', slug],
    queryFn: () => getDestinationBySlug(slug),
    enabled: !!slug,
  })
}

// Similar hooks can be created for other data fetching functions
export function useActivitiesByDestination(destinationId: string) {
  return useQuery({
    queryKey: ['activities', destinationId],
    queryFn: () => getActivitiesByDestination(destinationId),
    enabled: !!destinationId,
  })
}

export function usePackagesByDestination(destinationId: string) {
  return useQuery({
    queryKey: ['packages', 'destination', destinationId],
    queryFn: () => getPackagesByDestination(destinationId),
    enabled: !!destinationId,
  })
}