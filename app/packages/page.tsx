import { getPackages } from '@/prisma/repositories/packages';
import React from 'react'
import { SmallPackageCard } from '@/components/cards/SmallPackageCard';
import { PageTitle } from '@/components/PageTitle';
import { Search } from './Search';
import { Content } from './Content';

export default async function Packages() {
  const { data: packages, count } = await getPackages();
  console.log({ packages })

  return (
    <main className='h-screen pt-navbarOffset border'>
      <div className="mb-5 flex items-center justify-center gap-2">
        <PageTitle title='All Packages' className='' />
        <span className="h-6 w-6 flex items-center justify-center border rounded-full border-primary text-primary">
          {count}
        </span>
      </div>
      {/* <Content />
      <section className='grid md:grid-cols-3 gap-3 mx-auto max-w-7xl'>
        {allPackages.map((pkg, idx) => (
          <SmallPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </section> */}
      <Content packages={packages} />
    </main>
  )
}
