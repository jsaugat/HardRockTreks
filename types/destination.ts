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
  startingPrice: number;
  duration: number; // Duration in days
  difficulty: string; // Easy, Moderate, Challenging
  activityId: string | null; // Allow null
  subactivityId: string | null;
  activity?: Activity;
  subactivity?: Subactivity;
  highlights: string[];
  includedItems: string[];
  excludedItems: string[];
  createdAt: Date;
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
