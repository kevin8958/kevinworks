'use client';
import Section1 from '@/components/home/Section1';
import Section2 from '@/components/home/Section2';
import Section3 from '@/components/home/Section3';
import Section4 from '@/components/home/Section4';
import Section5 from '@/components/home/Section5';
import PlanetBackground from '@/components/layout/PlanetBackground';
import classNames from 'classnames';

export default function Index() {
  return (
    <div className="relative flex w-full flex-col items-center text-white">
      <PlanetBackground />
      <div
        className={classNames(
          'pointer-events-none fixed top-0 left-0 z-40 h-[120px] w-full opacity-100',
          'from-primary-990 bg-gradient-to-b to-transparent',
        )}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <div
        className={classNames(
          'pointer-events-none fixed bottom-0 left-0 z-40 h-[200px] w-full opacity-100',
          'to-primary-990 bg-gradient-to-b from-transparent',
        )}
      />
    </div>
  );
}
