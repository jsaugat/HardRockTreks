"use client"

import { SmallPackageCard } from '@/components/cards/SmallPackageCard'
import { Package } from '@prisma/client'
import { Search } from './Search'
import React, { useState } from 'react'

export const Content = ({ allPackages }: { allPackages: Package[] }) => {
  const [query, setQuery] = useState("")
  return (
    <>
      <Search
        query={query}
        setQuery={setQuery}
      />
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto max-w-7xl'>
        {allPackages
          .filter(pkg => pkg.name.toLowerCase().includes(query.toLowerCase()))
          .map((pkg, idx) => (
            <SmallPackageCard key={pkg.id} pkg={pkg} />
          ))}
      </section>
    </>
  )
}
