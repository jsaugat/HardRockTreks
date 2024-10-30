import { ContentTemplate } from '@/components/home/ContentTemplate'
import { Card } from '@/components/ui/card'
import React from 'react'

export function Activites() {
  return (
    <div className='py-20'>
      <ContentTemplate
        title='Travel Activities'
        subtitle='A unique blend of adventure, culture, and natural wonders.'
        buttonHref='/activities'
        buttonLabel='View all activities'
        hasButton
      >
        <section className="h-96 flex justify-between items-center gap-5">
          <Card className="flex-1 border bg-card h-full rounded-2xl"></Card>
          <Card className="flex-1 border bg-card h-full rounded-2xl"></Card>
          <Card className="flex-1 border bg-card h-full rounded-2xl"></Card>
        </section>
      </ContentTemplate>
    </div>
  )
}
