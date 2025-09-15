'use client';
import React, { useState } from 'react';
import Typography from '@/components/common/Typography';
import { BsStars } from 'react-icons/bs';
import Section4 from '@/components/home/Section4';

export default function Index() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-12 gap-y-10 px-10 pt-20 md:gap-x-10 md:gap-y-0">
        <div className="col-span-12 mb-10 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="h4" classes="!text-[#50b4ff]">
              ABOUT
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
