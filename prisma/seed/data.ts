// src/data/destinations/nepal.ts
export const nepalDestinationData = {
  name: 'Nepal',
  slug: 'destinations/nepal', // Changed from href to match schema
  image: 'https://example.com/nepal-landscape.jpg',
  description: 'Discover the breathtaking Himalayan landscapes, rich cultural heritage, and adventurous experiences in Nepal',
  packagesCount: 0, // Will be calculated during seeding
  activities: [
    {
      name: 'Trekking in Nepal', // Changed from label to match schema
      slug: 'activities/trekking', // Changed from href to match schema
      image: 'https://www.hardrocktreks.com/uploads/category/trekking-in-nepal.jpeg',
      packagesCount: 84,
      subactivities: [
        {
          name: 'Camping Trek', // Changed from label to match schema
          slug: 'destinations/nepal/trekking/camping', // Changed from href to match schema
          image: 'https://example.com/camping-trek-nepal.jpg',
          description: 'Experience the wilderness of Nepal through immersive camping treks',
          packagesCount: 19,
          packages: [
            {
              name: 'Siklish Trekking',
              slug: 'siklish-trekking',
              description: 'Siklish trek is a short and easy trek that offers stunning views of the Annapurna range and the Pokhara valley.',
              startingPrice: 850,
              duration: 17, // Changed to integer
              difficulty: 'Moderate', // Changed from grade to match schema
              highlights: [
                'Panoramic views of Annapurna range',
                'Traditional village exploration',
                'Authentic local culture experience'
              ],
              includedItems: [
                'Professional guide',
                'Camping equipment',
                'Meals during trek',
                'Transportation'
              ],
              excludedItems: [
                'Personal gear',
                'Travel insurance',
                'Alcoholic beverages',
                'Tips'
              ]
            },
            {
              name: 'Pach Pokhari Trekking',
              slug: 'pach-pokhari-trekking',
              description: 'Pach Pokhari is situated to the north east of Kathmandu valley and west of Rolwaling Himal. It is a pilgrimage place.',
              startingPrice: 900,
              duration: 17, // Changed to integer
              difficulty: 'Moderate', // Changed from grade to match schema
              highlights: [
                'Sacred five holy lakes',
                'Remote Himalayan landscape',
                'Unique cultural insights'
              ],
              includedItems: [
                'Professional guide',
                'Camping equipment',
                'Meals during trek',
                'Transportation'
              ],
              excludedItems: [
                'Personal gear',
                'Travel insurance',
                'Alcoholic beverages',
                'Tips'
              ]
            }
          ]
        },
        {
          name: 'Everest Region', // Changed from label to match schema
          slug: 'destinations/nepal/trekking/everest-region', // Changed from href to match schema
          image: 'https://example.com/everest-region.jpg',
          description: 'Trek through the legendary Everest region, home to the world\'s highest peak',
          packagesCount: 8,
          packages: [
            {
              name: 'Gokyo Lake and Renjo Pass Trekking',
              slug: 'gokyo-lake-renjo-pass',
              description: 'The classic walk has clear-cut goal to see Mt Everest. Many people find the sights along the way rival.',
              startingPrice: 975,
              duration: 15, // Changed to integer
              difficulty: 'Moderate', // Changed from grade to match schema
              highlights: [
                'Stunning views of Mt. Everest',
                'Scenic Gokyo Lakes',
                'Challenging Renjo Pass crossing'
              ],
              includedItems: [
                'Professional guide',
                'Accommodation in tea houses',
                'Meals during trek',
                'Transportation'
              ],
              excludedItems: [
                'Personal gear',
                'Travel insurance',
                'Alcoholic beverages',
                'Tips'
              ]
            },
            {
              name: 'Hike to Tengboche Monastery',
              slug: 'tengboche-monastery-hike',
              description: 'The classic walk has clear-cut goal to see Mt Everest. Many people find the sights along the way rival.',
              startingPrice: 875,
              duration: 12, // Changed to integer
              difficulty: 'Moderate', // Changed from grade to match schema
              highlights: [
                'Highest Buddhist monastery in the world',
                'Panoramic Everest views',
                'Sherpa culture exploration'
              ],
              includedItems: [
                'Professional guide',
                'Accommodation in tea houses',
                'Meals during trek',
                'Transportation'
              ],
              excludedItems: [
                'Personal gear',
                'Travel insurance',
                'Alcoholic beverages',
                'Tips'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Rafting in Nepal', // Changed from label to match schema
      slug: 'activities/rafting', // Changed from href to match schema
      image: 'https://example.com/nepal-rafting.jpg',
      description: 'Experience the thrill of white water rafting in Nepal\'s pristine rivers',
      packagesCount: 2,
      packages: [
        {
          name: 'Trishuli River Rafting',
          slug: 'trishuli-river-rafting',
          description: 'Trishuli River Rafting is one of the most popular and exciting river rafting trips in Nepal.',
          startingPrice: 250,
          duration: 1, // Changed to integer
          difficulty: 'Moderate', // Changed from grade to match schema
          highlights: [
            'Exciting rapids',
            'Scenic river views',
            'Suitable for beginners'
          ],
          includedItems: [
            'Rafting equipment',
            'Professional guide',
            'Lunch',
            'Transportation'
          ],
          excludedItems: [
            'Personal gear',
            'Travel insurance',
            'Extra meals',
            'Tips'
          ]
        },
        {
          name: 'Kali Gandaki River Rafting',
          slug: 'kali-gandaki-river-rafting',
          description: 'Kali Gandaki River Rafting is one of the most popular and exciting river rafting trips in Nepal.',
          startingPrice: 650,
          duration: 3, // Changed to integer
          difficulty: 'Moderate', // Changed from grade to match schema
          highlights: [
            'Multi-day river adventure',
            'Deep gorge exploration',
            'Challenging rapids'
          ],
          includedItems: [
            'Rafting equipment',
            'Professional guide',
            'Meals',
            'Camping gear',
            'Transportation'
          ],
          excludedItems: [
            'Personal gear',
            'Travel insurance',
            'Extra meals',
            'Tips'
          ]
        }
      ]
    },
    {
      name: 'Tour', // Changed from label to match schema
      slug: 'activities/tour', // Changed from href to match schema
      image: 'https://example.com/nepal-tour.jpg',
      description: 'Explore Nepal\'s rich cultural heritage and stunning landscapes through guided tours',
      packagesCount: 0,
      packages: [] // Empty packages array
    }
  ]
}