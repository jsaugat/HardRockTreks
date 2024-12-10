'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { CalendarDays, MapPin, ChartNoAxesColumnIncreasing, Users, Truck, Building, Info } from 'lucide-react'
import { Destination, Package } from '@prisma/client'

export interface PackageWithDestination extends Package {
  destination: Destination;
}

interface BookingCardProps {
  packageInfo: PackageWithDestination;
  price?: number;
  className?: string;
}

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <li className='flex items-center gap-2'>
    {icon}
    <span className='w-full flex justify-between'>
      <span className='font-semibold'>{label}</span>
      <span className='text-right'>{value.toString()}</span>
    </span>
  </li>
)

export const BookingCard: React.FC<BookingCardProps> = ({
  packageInfo,
  price,
  className,
}) => {
  const infoSections = [
    {
      title: "Package Overview",
      items: [
        { icon: <CalendarDays className="text-muted-foreground w-5 h-5" />, label: "Duration", value: packageInfo.duration || 'N/A' },
        { icon: <ChartNoAxesColumnIncreasing className="text-muted-foreground w-5 h-5" />, label: "Difficulty", value: packageInfo.difficulty || 'N/A' },
        { icon: <MapPin className="text-muted-foreground w-5 h-5" />, label: "Destination", value: packageInfo?.destination?.name || 'N/A' },
        { icon: <Users className="text-muted-foreground w-5 h-5" />, label: "Group Size", value: packageInfo.maxGroupSize ? `1 - ${packageInfo.maxGroupSize}` : 'N/A' },
      ]
    },
    {
      title: "Logistics & Accommodation",
      items: [
        { icon: <Info className="text-muted-foreground w-5 h-5" />, label: "Trip Type", value: packageInfo.tripType || 'N/A' },
        { icon: <Building className="text-muted-foreground w-5 h-5" />, label: "Accommodation", value: packageInfo.accomodation || 'N/A' },
        { icon: <Truck className="text-muted-foreground w-5 h-5" />, label: "Transportation", value: packageInfo?.transportation || 'N/A' },
      ]
    },
    {
      title: "Additional Info",
      items: [
        { icon: <ChartNoAxesColumnIncreasing className="text-muted-foreground w-5 h-5" />, label: "Max Altitude", value: packageInfo.highestAltitude || 'N/A' },
      ]
    }
  ]

  return (
    <Card className={cn("sticky top-4 rounded-3xl shadow-md", className)}>
      <CardHeader className='lg:p-4'>
        <CardTitle className="text-3xl font-medium">
          USD ${price?.toLocaleString() || 'N/A'}
          <span className='text-muted-foreground text-lg font-normal'>/Person</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6 lg:p-4'>
        {infoSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm text-muted-foreground mb-2">{section.title}</h3>
            <ul className="rounded-xl bg-muted/50 p-3 space-y-2 text-[15px]">
              {section.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <InfoItem {...item} />
                  {itemIndex < section.items.length - 1 && <Separator className='my-2 bg-muted-foreground/20' />}
                </React.Fragment>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  )
}

