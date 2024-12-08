import { Difficulty, PrismaClient, Status } from '@prisma/client'
import { seedData } from './data'
import prisma from '..'

async function main() {
  // Clear existing data to prevent duplicates
  await prisma.review.deleteMany()
  await prisma.package.deleteMany()
  await prisma.subactivity.deleteMany()
  await prisma.activity.deleteMany()
  await prisma.destination.deleteMany()

  // Create Destinations
  const destinations = await Promise.all(
    seedData.destinations.map(dest =>
      prisma.destination.create({ data: dest })
    )
  )

  // Create Activities with destination mapping
  const activities = await Promise.all(
    seedData.activities.map(activity => {
      const destinationId = destinations.find(
        dest => dest.slug === activity.destinationSlug
      )?.id

      const { destinationSlug, ...activityData } = activity

      return prisma.activity.create({
        data: {
          ...activityData,
          destinationId: destinationId!
        }
      })
    })
  )

  // Create Subactivities with destination and activity mapping
  const subactivities = await Promise.all(
    seedData.subactivities.map(subactivity => {
      const destinationId = destinations.find(
        dest => dest.slug === subactivity.destinationSlug
      )?.id

      const activityId = activities.find(
        act => act.slug === subactivity.activitySlug
      )?.id

      const { destinationSlug, activitySlug, ...subactivityData } = subactivity

      return prisma.subactivity.create({
        data: {
          ...subactivityData,
          destinationId: destinationId!,
          activityId: activityId!
        }
      })
    })
  )

  // Create Packages with destination, activity, and subactivity mapping
  await Promise.all(
    seedData.packages.map(pkg => {
      const destinationId = destinations.find(
        dest => dest.slug === pkg.destinationSlug
      )?.id

      const activityId = activities.find(
        act => act.slug === pkg.activitySlug
      )?.id

      const subactivityId = subactivities.find(
        sub => sub.slug === pkg.subactivitySlug
      )?.id

      const {
        destinationSlug,
        activitySlug,
        subactivitySlug,
        ...packageData
      } = pkg

      return prisma.package.create({
        data: {
          ...packageData,
          destinationId: destinationId!,
          activityId: activityId || undefined, // Ensure activityId is either a string or undefined
          subactivityId: subactivityId || undefined, // Ensure subactivityId is either a string or undefined
          difficulty: packageData.difficulty as Difficulty, // Cast to the Difficulty enum
        },
      })
    })
  )

  // Create Reviews
  await Promise.all(
    seedData.reviews.map(review =>
      prisma.review.create({
        data: {
          ...review,
          status: review.status as Status, // Cast to the Status enum
        },
      })
    )
  )

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })