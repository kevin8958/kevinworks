'use client';

import React from 'react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const Gnb = () => {
  const router = useRouter();
  return (
    <div className="bg-primary-990 border-primary-100/30 fixed top-6 left-1/2 z-50 flex w-fit -translate-x-1/2 items-center justify-center rounded-2xl border border-[1px] px-4 py-2 transition-all duration-500 ease-in-out">
      <Button variant="clear" size="sm" onClick={() => router.push('/')}>
        Home
      </Button>
      <Button variant="clear" size="sm" onClick={() => router.push('/')}>
        Projects
      </Button>
      <Button
        classes="min-w-[80px]"
        variant="clear"
        size="sm"
        onClick={() => router.push('/components')}
      >
        Components
      </Button>
      <Button variant="clear" size="sm" onClick={() => router.push('/')}>
        Contact
      </Button>
    </div>
  );
};

export default Gnb;
