'use client';
import React from 'react';
import { componentsImages } from '@/constants/common';
import SpotlightCard from '@/design-system/interaction/SpotlightCard';
import Typography from '@/design-system/foundation/Typography';
import { BsStars } from 'react-icons/bs';
import Image from 'next/image';
import CarouselWithProgress from '@/design-system/layout/CarouselWithProgress';
import Button from '../components/Button';

export default function Section99() {
  return (
    <section
      id="components"
      className="relative flex w-full flex-col items-center gap-4 px-6 pt-20 pb-10"
    >
      <div className="flex w-full max-w-[1000px] items-center justify-between">
        <div className="flex items-center gap-2">
          <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
          <Typography variant="H3" classes="!text-[#50b4ff]">
            Components
          </Typography>
        </div>
        {/* <Button variant="outline" size="sm" onClick={() => window.open('/design-system', '_self')}>
          VIEW ALL
        </Button> */}
      </div>
      <div className="hidden w-full max-w-[1000px] md:block">
        <div className="mb-10 grid w-full grid-cols-12 gap-4">
          {componentsImages.map((item) => (
            <div key={item.id} className="col-span-12 md:col-span-3">
              <SpotlightCard spotlightColor="rgba(80, 180, 255, 0.7)" href={item.href}>
                <div className="flex w-full flex-col items-start gap-4 pb-4">
                  <div className="bg-neutral-990 pointer-events-none relative flex aspect-[3/2] w-full items-center justify-center rounded-lg text-white">
                    <Image
                      src={item.src}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={item.alt}
                      className="rounded-lg object-contain"
                    />
                  </div>
                  <Typography variant="B2" classes="!text-neutral-100 !font-semibold">
                    {item.label}
                  </Typography>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
      <CarouselWithProgress />
    </section>
  );
}
