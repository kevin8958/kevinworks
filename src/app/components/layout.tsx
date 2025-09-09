'use client';

import { useState } from 'react';
import Snb from '@/components/layout/Snb';
import BurgerButton from '@/components/interaction/BurgerMenu';

export default function ComponentsLayout(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-[calc(100dvh-60px)] w-full flex-col">
      <div className="relative w-full">
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <Snb isOpen={isOpen} />
        <div className="relative m-auto w-[1400px] pt-[100px] sm:pl-[260px]">{props.children}</div>
      </div>
    </div>
  );
}
