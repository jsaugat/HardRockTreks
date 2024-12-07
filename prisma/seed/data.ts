export const seedData = {
  destinations: [
    {
      name: 'Nepal',
      slug: 'nepal',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Himalayan paradise with breathtaking mountain landscapes and rich cultural heritage'
    },
    {
      name: 'Tibet',
      slug: 'tibet',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Mystical land of high-altitude plateaus, ancient monasteries, and stunning Himalayan vistas'
    },
    {
      name: 'Bhutan',
      slug: 'bhutan',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'The last Himalayan kingdom, known for its unique culture, Buddhist heritage, and stunning landscapes'
    }
  ],

  activities: [
    {
      name: 'Trekking',
      slug: 'trekking',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Explore mountain trails and scenic routes',
      destinationSlug: 'nepal'
    },
    {
      name: 'Cultural Tour',
      slug: 'cultural-tour',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Discover local traditions and historical sites',
      destinationSlug: 'nepal'
    },
    {
      name: 'Mountain Expedition',
      slug: 'mountain-expedition',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'High-altitude mountaineering and exploration',
      destinationSlug: 'tibet'
    },
    {
      name: 'Buddhist Pilgrimage',
      slug: 'buddhist-pilgrimage',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Spiritual journey through sacred monasteries and sites',
      destinationSlug: 'bhutan'
    }
  ],

  subactivities: [
    {
      name: 'Everest Base Camp Trek',
      slug: 'everest-base-camp',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Classic trek to the base of the world\'s highest mountain',
      destinationSlug: 'nepal',
      activitySlug: 'trekking'
    },
    {
      name: 'Kathmandu Valley Tour',
      slug: 'kathmandu-valley',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Explore ancient temples and local culture',
      destinationSlug: 'nepal',
      activitySlug: 'cultural-tour'
    },
    {
      name: 'Lhasa Spiritual Journey',
      slug: 'lhasa-spiritual-tour',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Explore the spiritual heart of Tibet',
      destinationSlug: 'tibet',
      activitySlug: 'mountain-expedition'
    },
    {
      name: 'Paro Valley Monastery Trek',
      slug: 'paro-monastery-trek',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      description: 'Spiritual trek through Bhutan\'s sacred monasteries',
      destinationSlug: 'bhutan',
      activitySlug: 'buddhist-pilgrimage'
    }
  ],

  packages: [
    {
      name: 'Everest Base Camp Expedition',
      slug: 'everest-base-camp-expedition',
      description: 'A challenging trek to the base of Mount Everest',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      startingPrice: 1200.00,
      duration: 14,
      difficulty: 'CHALLENGING',
      destinationSlug: 'nepal',
      activitySlug: 'trekking',
      subactivitySlug: 'everest-base-camp',
      tripType: 'Group',
      accomodation: 'Lodge',
      transportation: 'Jeep',
      seasons: 'Spring,Autumn',
      highestAltitude: 5364,
      maxGroupSize: 12
    },
    {
      name: 'Kathmandu Cultural Immersion',
      slug: 'kathmandu-cultural-tour',
      description: 'Explore the rich cultural heritage of Kathmandu Valley',
      image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      startingPrice: 800.00,
      duration: 7,
      difficulty: 'EASY',
      destinationSlug: 'nepal',
      activitySlug: 'cultural-tour',
      subactivitySlug: 'kathmandu-valley',
      tripType: 'Private',
      accomodation: 'Hotel',
      transportation: 'Bus',
      seasons: 'All Year',
      highestAltitude: 1400,
      maxGroupSize: 6
    }
  ],

  reviews: [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      destination: 'Everest',
      serviceRating: 5,
      review: 'An incredible journey! The Everest Base Camp trek was challenging but absolutely worth it.',
      status: 'APPROVED',
      avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      destination: 'Lhasa',
      serviceRating: 4,
      review: 'The Lhasa spiritual journey was breathtaking and deeply moving.',
      status: 'APPROVED',
      avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    }
  ]
};