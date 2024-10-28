import React from 'react'
import { Button } from '@/components/ui/button'

export default function ButtonWithIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div>
      <Button variant={'secondary'} className='flex gap-2 px-1 pr-3 shadow-md bg-background/90 '>
        <div className="rounded-full bg-primary p-1 h-8 w-8 flex items-center justify-center">
          {icon}
        </div>
        <span>{label}</span>
      </Button>
    </div>
  )
}
