// types/destination.ts

export type Destination = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  activities: Activity[];
  createdAt: Date;
};

export type Activity = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  destinationId?: string;
  destination?: Destination;
  subactivities?: Subactivity[];
  packages?: Package[];
  createdAt?: Date;
};

export type Subactivity = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  destination: Destination;
  destinationId: string;
  activity: Activity;
  activityId: string;
  packages: Package[];
  _count: {
    packages: number; // count of associated packages
  };
  createdAt: Date;
};

export type Package = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  startingPrice: number;
  duration: number; // Duration in days
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING'; // Enum for Difficulty
  destinationId: string; // Foreign key to Destination
  activityId: string | null; // Allow null if not tied to a specific activity
  subactivityId: string | null; // Allow null if not tied to a specific subactivity
  tripType?: string | null; // Optional: Group, Private
  accomodation?: string | null; // Optional: Hotel, Lodge, Camping
  transportation?: string | null; // Optional: Bus, Jeep, Flight
  seasons?: string | null; // Optional: Spring, Autumn, Winter
  highestAltitude?: number | null; // Optional: Highest altitude in meters
  maxGroupSize?: number | null; // Optional: Maximum group size
  createdAt: Date; // Creation timestamp
  activity?: Activity; // Optional relationship to Activity
  subactivity?: Subactivity; // Optional relationship to Subactivity
  destination?: Destination; // Optional relationship to Destination
};


export type Review = {
  id: string;
  name: string;
  email: string;
  destination: string;
  serviceRating: number;
  review: string;
  status: "APPROVED" | "PENDING" | "REJECTED";
  avatar?: string;
  createdAt: Date;
};
