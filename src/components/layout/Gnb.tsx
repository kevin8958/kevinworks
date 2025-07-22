'use client';

import React from 'react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const Gnb = () => {
  const router = useRouter();
  return (
    <div className="bg-primary-900 fixed top-0 z-50 flex h-[60px] w-full items-center justify-center p-4 transition-all duration-500 ease-in-out">
      <Button classes="min-w-[80px]" variant="clear" size="sm" onClick={() => router.push('/')}>
        Home
      </Button>
      <Button classes="min-w-[80px]" variant="clear" size="sm" onClick={() => router.push('/')}>
        About
      </Button>
      <Button
        classes="min-w-[80px]"
        variant="clear"
        size="sm"
        onClick={() => router.push('/components')}
      >
        Components
      </Button>
      <Button classes="min-w-[80px]" variant="clear" size="sm" onClick={() => router.push('/')}>
        Contact
      </Button>
    </div>
  );
};

export default Gnb;
