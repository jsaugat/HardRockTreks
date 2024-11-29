// prisma/seed/seed.ts
import { PrismaClient } from '@prisma/client'
import { nepalDestinationData } from './data'

const prisma = new PrismaClient()

// Type definitions for the data structure
interface Package {
  name: string
  slug: string
  description: string
  startingPrice: number
  duration: number
  difficulty: string
  highlights: string[]
  includedItems: string[]
  excludedItems: string[]
}

interface Subactivity {
  name: string
  slug: string
  image: string
  description: string
  packagesCount: number
  packages?: Package[]
}

interface Activity {
  name: string
  slug: string
  image: string
  description?: string
  packagesCount: number
  subactivities?: Subactivity[]
  packages?: Package[]
}

interface Destination {
  name: string
  slug: string
  image: string
  description: string
  packagesCount: number
  activities: Activity[]
}

// Utility function to safely get slug
const getSlug = (href: string | undefined): string => {
  if (!href) return ''
  return href.replace(/^\//, '')
}

// Utility function to calculate total packages count
const calculatePackagesCount = (destination: Destination): number => {
  return destination.activities.reduce((total, activity) => {
    const activityPackages = activity.packages?.length || 0
    const subactivityPackages = activity.subactivities?.reduce((subTotal, subactivity) => 
      subTotal + (subactivity.packages?.length || 0), 0) || 0
    return total + activityPackages + subactivityPackages
  }, 0)
}

// Seed function with explicit typing
async function seedDestination(destinationData: Destination) {
  // Create Destination
  const destination = await prisma.destination.create({
    data: {
      name: destinationData.name,
      slug: getSlug(destinationData.slug),
      image: destinationData.image || 'https://example.com/default-destination.jpg',
      description: destinationData.description || 'No description available',
      packagesCount: calculatePackagesCount(destinationData),
      activities: {
        create: destinationData.activities.map(activityData => ({
          name: activityData.name,
          slug: getSlug(activityData.slug),
          image: activityData.image || 'https://example.com/default-activity.jpg',
          description: activityData.description || 'No description available',
          packagesCount: activityData.packagesCount || 0,
          subactivities: activityData.subactivities ? {
            create: activityData.subactivities.map(subactivityData => ({
              name: subactivityData.name,
              slug: getSlug(subactivityData.slug),
              image: subactivityData.image || 'https://example.com/default-subactivity.jpg',
              description: subactivityData.description || 'No description available',
              packagesCount: subactivityData.packagesCount || 0,
              packages: subactivityData.packages ? {
                create: subactivityData.packages.map(pkg => ({
                  name: pkg.name,
                  slug: getSlug(pkg.slug),
                  description: pkg.description || 'No description available',
                  startingPrice: pkg.startingPrice || 0,
                  duration: pkg.duration || 0,
                  difficulty: pkg.difficulty || 'Not specified',
                  highlights: pkg.highlights || [],
                  includedItems: pkg.includedItems || [],
                  excludedItems: pkg.excludedItems || [],
                }))
              } : undefined
            }))
          } : undefined,
          packages: activityData.packages ? {
            create: activityData.packages.map(pkg => ({
              name: pkg.name,
              slug: getSlug(pkg.slug),
              description: pkg.description || 'No description available',
              startingPrice: pkg.startingPrice || 0,
              duration: pkg.duration || 0,
              difficulty: pkg.difficulty || 'Not specified',
              highlights: pkg.highlights || [],
              includedItems: pkg.includedItems || [],
              excludedItems: pkg.excludedItems || [],
            }))
          } : undefined
        }))
      }
    },
    include: {
      activities: true
    }
  })

  return destination
}

async function main() {
  // Clear existing data to prevent duplicates
  await prisma.package.deleteMany()
  await prisma.subactivity.deleteMany()
  await prisma.activity.deleteMany()
  await prisma.destination.deleteMany()

  // Seed Nepal destination
  const destination = await seedDestination(nepalDestinationData as Destination)
  console.log(`Seeded destination: ${destination.name}`)
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
