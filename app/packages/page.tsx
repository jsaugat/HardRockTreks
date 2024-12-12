import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getPackages } from '@/prisma/repositories/packages';
import React from 'react'

export default async function Packages() {
  const allPackages = await getPackages();
  console.log({ allPackages })

  return (
    <main className='h-screen pt-navbarOffset border'>
      <section className='grid md:grid-cols-2 gap-3 mx-auto max-w-7xl'>
        {allPackages.map((pkg) => (
          <Card key={pkg.id}>
            <CardHeader>{pkg.name}</CardHeader>
            <CardContent>{pkg.description}</CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
