'use client';

import { useState } from 'react';
import Snb from '@/components/layout/Snb';
import PageWrapper from '@/components/layout/PageWrapper';
import BurgerButton from '@/components/interaction/BurgerMenu';
import Button from '@/components/common/Button';
import { ImHome3 } from 'react-icons/im';

export default function ComponentsLayout(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageWrapper>
      <div className="flex min-h-[calc(100dvh-60px)] w-full flex-col">
        <div className="relative w-full">
          <div className="from-primary-990 to-primary-990/30 fixed top-0 left-0 z-[999] flex w-full items-center justify-between bg-gradient-to-b from-60% to-100% px-4 pt-4 pb-6 sm:justify-end">
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button
              variant="contain"
              size="sm"
              classes="!text-lg"
              onClick={() => window.open('/', '_self')}
            >
              <ImHome3 />
            </Button>
          </div>
          <Snb isOpen={isOpen} />
          <div className="transition-left relative m-auto pt-[100px] duration-300 ease-in-out sm:pt-[60px] sm:pl-[260px]">
            {props.children}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
