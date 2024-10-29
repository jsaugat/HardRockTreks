import { ContentTemplate } from '@/components/home/ContentTemplate'
import React from 'react'
import { EmblaCarousel } from './EmblaCarousel'

export function PopularDestinations() {
  return (
    <div className='py-20'>
      <ContentTemplate
        title='Popular Destinations'
        subtitle='Explore the most popular destinations'
        hasButton
        buttonHref='/'
        buttonLabel='View all destinations'
      >
        <div className="h-80 w-full bg-secondary rounded-2xl flex justify-center items-center">
          Popular destinations content
        </div>
        <EmblaCarousel />
      </ContentTemplate>
    </div>
  )
}


