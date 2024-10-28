'use client';

import { PhoneCall } from 'lucide-react';
import { NavMenu } from './nav-menu';
import ButtonWithIcon from '@/components/button-with-icon';
import { Logo } from '@/components/logo';

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center">
        <div className="mx-4 hidden md:flex justify-between w-full">
          <Logo />
          <section className="flex items-center gap-2">
            <NavMenu />
            <ButtonWithIcon icon={<PhoneCall className='w-4 h-4 text-background' />} label="Contact us" />
          </section>
        </div>
      </div>
    </header>
  );
}