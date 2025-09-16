'use client';
import { useEffect } from 'react';

import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import Section4 from '@/components/home/Section4';

export default function Index() {
  return (
    <div className="flex w-full flex-col items-center overflow-y-scroll text-white">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
