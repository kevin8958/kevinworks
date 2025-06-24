'use client';

import React from 'react';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const Gnb = () => {
  const router = useRouter();
  return (
    <div className="bg-primary-900 fixed top-0 z-50 flex h-[80px] w-full items-center border-b border-gray-600/50 p-4 transition-all duration-500 ease-in-out">
      <Button classes="min-w-[80px]" variant="clear" onClick={() => router.push('/')}>
        HOME
      </Button>
    </div>
  );
};

export default Gnb;
