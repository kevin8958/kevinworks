'use client';
import { useEffect } from 'react';

import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';

export default function Index() {
  return (
    <div className="flex h-screen w-full snap-y snap-mandatory flex-col items-center overflow-y-scroll text-white">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
