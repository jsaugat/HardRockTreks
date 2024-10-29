import { ContentTemplate } from '@/components/home/ContentTemplate'
import React from 'react'

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
        <div className="h-40 bg-gray-200 rounded-2xl flex justify-center items-center">
          Packages content
        </div>
      </ContentTemplate>
    </main>
  )
}
