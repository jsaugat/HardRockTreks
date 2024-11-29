import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getDestinations() {
  return prisma.destination.findMany()
}

export async function getDestinationBySlug(slug: string) {
  return prisma.destination.findUnique({
    where: { slug },
    include: {
      activities: {
        include: {
          subactivities: true,
          packages: true
        }
      }
    }
  })
}

export async function getActivitiesByDestination(destinationId: string) {
  return prisma.activity.findMany({
    where: { destinationId },
    include: {
      subactivities: true,
      packages: true
    }
  })
}

export async function getSubactivitiesByActivity(activityId: string) {
  return prisma.subactivity.findMany({
    where: { activityId },
    include: {
      packages: true
    }
  })
}

export async function getPackagesByDestination(destinationId: string) {
  return prisma.package.findMany({
    where: {
      OR: [
        {
          activity: {
            destinationId
          }
        },
        {
          subactivity: {
            activity: {
              destinationId
            }
          }
        }
      ]
    }
  })
}

export async function getPackagesByActivity(activityId: string) {
  return prisma.package.findMany({
    where: {
      OR: [
        { activityId },
        {
          subactivity: {
            activityId
          }
        }
      ]
    }
  })
}

export async function getPackagesBySubactivity(subactivityId: string) {
  return prisma.package.findMany({
    where: { subactivityId }
  })
}

