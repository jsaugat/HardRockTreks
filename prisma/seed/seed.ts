import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data to prevent duplicates
  await prisma.review.deleteMany()
  await prisma.package.deleteMany()
  await prisma.subactivity.deleteMany()
  await prisma.activity.deleteMany()
  await prisma.destination.deleteMany()

  // Create Destinations
  const destinations = await Promise.all([
    prisma.destination.create({
      data: {
        name: 'Nepal',
        slug: 'nepal',
        image: '/images/nepal.jpg',
        description: 'Himalayan paradise with breathtaking mountain landscapes and rich cultural heritage'
      }
    }),
    prisma.destination.create({
      data: {
        name: 'Peru',
        slug: 'peru',
        image: '/images/peru.jpg',
        description: 'Home to Machu Picchu, ancient Incan ruins, and diverse landscapes'
      }
    })
  ])

  // Create Activities for each destination
  const activities = await Promise.all([
    prisma.activity.create({
      data: {
        name: 'Trekking',
        slug: 'trekking',
        image: '/images/trekking.jpg',
        description: 'Explore mountain trails and scenic routes',
        destinationId: destinations[0].id // Nepal
      }
    }),
    prisma.activity.create({
      data: {
        name: 'Cultural Tour',
        slug: 'cultural-tour',
        image: '/images/cultural-tour.jpg',
        description: 'Discover local traditions and historical sites',
        destinationId: destinations[0].id // Nepal
      }
    }),
    prisma.activity.create({
      data: {
        name: 'Hiking',
        slug: 'hiking',
        image: '/images/hiking.jpg',
        description: 'Explore Andean trails and mountain paths',
        destinationId: destinations[1].id // Peru
      }
    })
  ])

  // Create Subactivities
  const subactivities = await Promise.all([
    prisma.subactivity.create({
      data: {
        name: 'Everest Base Camp Trek',
        slug: 'everest-base-camp',
        image: '/images/everest-trek.jpg',
        description: 'Classic trek to the base of the world\'s highest mountain',
        destinationId: destinations[0].id, // Nepal
        activityId: activities[0].id // Trekking
      }
    }),
    prisma.subactivity.create({
      data: {
        name: 'Kathmandu Valley Tour',
        slug: 'kathmandu-valley',
        image: '/images/kathmandu-tour.jpg',
        description: 'Explore ancient temples and local culture',
        destinationId: destinations[0].id, // Nepal
        activityId: activities[1].id // Cultural Tour
      }
    }),
    prisma.subactivity.create({
      data: {
        name: 'Inca Trail',
        slug: 'inca-trail',
        image: '/images/inca-trail.jpg',
        description: 'Historic trail leading to Machu Picchu',
        destinationId: destinations[1].id, // Peru
        activityId: activities[2].id // Hiking
      }
    })
  ])

  // Create Packages
  await Promise.all([
    prisma.package.create({
      data: {
        name: 'Everest Base Camp Expedition',
        slug: 'everest-base-camp-expedition',
        description: 'A challenging trek to the base of Mount Everest',
        startingPrice: 1200.00,
        duration: 14,
        difficulty: 'CHALLENGING',
        destinationId: destinations[0].id,
        activityId: activities[0].id,
        subactivityId: subactivities[0].id,
        highlights: [
          'Stunning Himalayan views',
          'Sherpa village interactions',
          'Challenging high-altitude trek'
        ],
        includedItems: [
          'Professional guide',
          'Accommodation',
          'Meals during trek'
        ],
        excludedItems: [
          'Personal insurance',
          'Travel flights',
          'Personal gear'
        ]
      }
    }),
    prisma.package.create({
      data: {
        name: 'Kathmandu Cultural Immersion',
        slug: 'kathmandu-cultural-tour',
        description: 'Explore the rich cultural heritage of Kathmandu Valley',
        startingPrice: 800.00,
        duration: 7,
        difficulty: 'EASY',
        destinationId: destinations[0].id,
        activityId: activities[1].id,
        subactivityId: subactivities[1].id,
        highlights: [
          'Ancient temple visits',
          'Local cuisine experience',
          'Traditional craft workshops'
        ],
        includedItems: [
          'Local guide',
          'Cultural workshop fees',
          'Some meals'
        ],
        excludedItems: [
          'Personal expenses',
          'Travel insurance',
          'Souvenirs'
        ]
      }
    })
  ])

  // Create Reviews
  await Promise.all([
    prisma.review.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        destination: 'Everest',
        serviceRating: 5,
        review: 'An incredible journey! The Everest Base Camp trek was challenging but absolutely worth it.',
        status: 'APPROVED',
        avatar: '/'
      }
    }),
    prisma.review.create({
      data: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        destination: 'Manaslu',
        serviceRating: 4,
        review: 'Machu Picchu was breathtaking. The Inca Trail trek was well-organized and memorable.',
        status: 'APPROVED',
        avatar: '/'
      }
    })
  ])

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