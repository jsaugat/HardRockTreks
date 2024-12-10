import { PrismaClient } from '@prisma/client'
import { NavData } from '@/types/nav'

const prisma = new PrismaClient()

export async function getNavData(): Promise<NavData> {
  try {
    const destinations = await prisma.destination.findMany({
      include: {
        activities: {
          include: {
            subactivities: true
          }
        }
      }
    })

    return {
      destinations: destinations.map(destination => ({
        name: destination.name,
        slug: `/destinations/${destination.slug}`,
        activities: destination.activities.map(activity => ({
          name: activity.name,
          slug: `/destinations/${destination.slug}/${activity.slug}`,
          subactivities: activity.subactivities.map(subactivity => ({
            name: subactivity.name,
            slug: `/destinations/${destination.slug}/${activity.slug}/${subactivity.slug}`
          }))
        }))
      }))
    }
  } catch (error) {
    console.error('Error fetching nav data:', error)
    return { destinations: [] }
  }
}

