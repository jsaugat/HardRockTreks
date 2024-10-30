import { ContentTemplate } from '@/components/home/ContentTemplate'
import React from 'react'
import packagesData from "@/data-access/packages.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import ButtonWithIcon from '@/components/ButtonWithIcon';
import { ArrowUpRight, Calendar } from 'lucide-react';

export function Packages() {
  return (
    <main className='min-h-screen py-10'>
      <ContentTemplate
        title='Packages'
        subtitle='Choose our range of fixed departure packages for 2024.'
        hasButton
        buttonHref='/'
        buttonLabel='View all packages'
      >
        {packagesData.map((pkg, index) => (
          <Card key={index} className='flex p-3 lg:h-[470px] rounded-3xl shadow-md'>
            {/* IMAGE SECTION - LEFT */}
            <div className="h-full w-2/3 rounded-xl bg-primary/40" />
            {/* TEXT SECTION - RIGHT */}
            <section className='w-1/3 p-8 flex lg:flex-col justify-between'>
              <div className='space-y-4'>
                <h2 className='text-4xl font-neueRegrade font-semibold'>{pkg.name}</h2>
                <p className='text-lg leading-tight'>{pkg.description}</p>
                <div className='flex gap-3 text-muted-foreground'>
                  <Button size="sm" variant={"outline"} className=''>
                    {pkg.duration}
                  </Button>
                  <Button size="sm" variant={"outline"} className=''>
                    {pkg.difficulty}
                  </Button>
                </div>
              </div>
              <div className='space-y-4' >
                <p className=''>
                  {/* From */}
                  <span className='text-4xl font-normal mr-3'>From</span>
                  <span className='text-lg font-semibold'>$</span>
                  <span className='text-4xl font-semibold'>{pkg.price}</span>
                </p>
                <Button className='pr-1 lg:w-full lg:h-12 bg-gradient-to-br from-primary to-purple-500 hover:from-primary transition-all flex justify-between items-center'>
                  <span className='w-10'></span>
                  <span>Book Now</span>
                  <div className="rounded-full bg-background h-10 w-10 flex items-center justify-center ml-2">
                    <ArrowUpRight className="h-6 w-6 text-foreground" />
                  </div>
                </Button>
              </div>
            </section>
          </Card>
        ))}
      </ContentTemplate>
    </main >
  )
}
