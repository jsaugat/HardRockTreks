export type Route = {
  href: string;
  label: string;
  children?: RouteChild[];
};

export type RouteChild = {
  href: string;
  label: string;
  activities?: Activity[];
};

export type Activity = {
  href: string;
  label: string;
  subactivities?: Subactivity[];
};

export type Subactivity = {
  href: string;
  label: string;
};
