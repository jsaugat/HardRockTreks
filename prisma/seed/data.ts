// prisma/seed/data.js

const nepalDestinationData = {
  name: "Nepal",
  slug: "nepal",
  image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  description: "Nepal is known for its rich biodiversity, cultural heritage, and the stunning Himalayas.",
  packagesCount: 10,
  activities: [
    {
      name: "Trekking",
      slug: "trekking",
      image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description: "Explore the diverse landscapes of Nepal through trekking.",
      packagesCount: 5,
      subactivities: [
        {
          name: "Everest Base Camp Trek",
          slug: "everest-base-camp-trek",
          image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
          description: "A classic trek to the base camp of Mount Everest.",
          packagesCount: 2,
          packages: [
            {
              name: "Everest Trek Basic Package",
              slug: "everest-trek-basic",
              description: "A basic package for the Everest Base Camp Trek.",
              startingPrice: 1200,
              duration: 14,
              difficulty: "CHALLENGING",
              highlights: ["Stunning views of Everest", "Cultural experience in Sherpa villages"],
              includedItems: ["Guide", "Accommodation", "Meals"],
              excludedItems: ["Flight to Lukla", "Personal expenses"]
            },
            {
              name: "Everest Trek Deluxe Package",
              slug: "everest-trek-deluxe",
              description: "A luxury experience for the Everest Base Camp Trek.",
              startingPrice: 2500,
              duration: 14,
              difficulty: "CHALLENGING",
              highlights: ["Luxury accommodation", "Private guide", "Extra comfort"],
              includedItems: ["Guide", "Accommodation", "Meals", "Private Porter"],
              excludedItems: ["Flight to Lukla", "Personal expenses"]
            }
          ]
        }
      ]
    },
    {
      name: "Rafting",
      slug: "rafting",
      image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description: "Experience thrilling white-water rafting in the rivers of Nepal.",
      packagesCount: 3,
      subactivities: [
        {
          name: "Trishuli River Rafting",
          slug: "trishuli-river-rafting",
          image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
          description: "Rafting through the picturesque Trishuli River.",
          packagesCount: 1,
          packages: [
            {
              name: "Trishuli River Rafting Basic Package",
              slug: "trishuli-basic",
              description: "A day of rafting in the Trishuli River with all essentials.",
              startingPrice: 100,
              duration: 1,
              difficulty: "MODERATE",
              highlights: ["Beautiful scenery", "Exciting rapids"],
              includedItems: ["Rafting gear", "Guide", "Transport"],
              excludedItems: ["Meals", "Personal expenses"]
            }
          ]
        }
      ]
    }
  ]
}

export { nepalDestinationData }
