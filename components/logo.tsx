import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <main className='flex items-center gap-3 relative'>
        <Image
          src='/logo.png'
          alt='Hard Rock Treks & Expeditions'
          width={60}
          height={60}
        />
        <div className={cn("relative flex flex-col items-start justify-start gap-0 p-0 font-semibold text-secondary uppercase text-2xl leading-none mix-blend-difference", className)}>
          <span className='mix-blend-difference'>
            Hard Rock Treks & Expeditions
          </span>
          <span className='font-normal text-base'>
            Since 1993
          </span>
        </div>
      </main>
    </Link>
  )
}
