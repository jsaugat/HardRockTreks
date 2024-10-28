import React from 'react'
import { Compass, MapPin, Star, Users, Info, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from "next/link";

const features = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: 'Destinations',
    description: 'Explore amazing places',
    href: '/destination',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'About Us',
    description: 'Our story and mission',
    href: '/about',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Profile',
    description: 'Manage your account',
    href: '/profile',
  },
  {
    icon: <Info className="h-6 w-6" />,
    title: 'General Info',
    description: 'Important details',
    href: '/general-info',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Reviews',
    description: 'What others say',
    href: '/reviews',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Contact',
    description: 'Get in touch',
    href: '/contact',
  },
];

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {features.map((feature) => (
        <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
          <Link href={feature.href}>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}
