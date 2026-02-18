'use client';
import React from 'react';
import { designSystemMenus } from '@/constants/common';
import SpotlightCard from '@/design-system/interaction/SpotlightCard';
import Image from 'next/image';
import Typography from '@/design-system/foundation/Typography';
import { BsStars } from 'react-icons/bs';
import SplitText from '@/design-system/interaction/SplitText';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import CountUp from '@/design-system/interaction/CountUp';

export default function Index() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
  ];

  const parseComponent = (component: { id: string; label: string; href: string }) => {
    switch (component.id) {
      case 'splitText':
        return (
          <SplitText
            variant="H3"
            text="Split Text"
            classes="translate-y-[-16px]"
            delay={100}
            repeat
          />
        );
      case 'countUp':
        return (
          <CountUp to={100} repeat className="text-primary-500 font-mono text-4xl font-bold" />
        );
      default:
        return (
          <Image
            src={`/image/${component.id}_thumbnail.png`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${component.label} Thumbnail`}
            className="rounded-lg object-contain"
          />
        );
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 px-4">
      <BreadCrumb items={breadcrumbItems} />
      {designSystemMenus.map((menu) => (
        <div key={menu.id} className="mb-10 grid w-full grid-cols-12 gap-4">
          <div className="col-span-12 flex items-center gap-2">
            <BsStars className="!text-secondary-300 shrink-0 text-xl" />
            <Typography variant="H3" classes="!text-secondary-300">
              {menu.id}
            </Typography>
          </div>
          {menu.items.map((item) => (
            <div key={item.id} className="col-span-12 md:col-span-4 lg:col-span-3">
              <SpotlightCard spotlightColor="rgba(80, 180, 255, 0.7)" href={item.href}>
                <div className="flex w-full flex-col items-start gap-4 pb-4">
                  <div className="bg-neutral-990 pointer-events-none relative flex aspect-[3/2] w-full items-center justify-center rounded-lg text-white">
                    {parseComponent(item)}
                  </div>
                  <Typography variant="B2" classes="!text-neutral-100 !font-semibold">
                    {item.label}
                  </Typography>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
