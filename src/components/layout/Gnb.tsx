'use client';

import React from 'react';
import GnbButton from '@/components/layout/GnbButton';

const Gnb = () => {
  return (
    <div className="border-primary-100/30 fixed top-6 left-1/2 z-50 flex w-fit -translate-x-1/2 items-center justify-center gap-4 rounded-2xl border border-[1px] bg-transparent px-4 px-6 pt-1 pb-2 backdrop-blur transition-all duration-500 ease-in-out">
      <GnbButton href="/">Home</GnbButton>
      <GnbButton href="/about">About</GnbButton>
      <GnbButton href="/projects">Projects</GnbButton>
      <GnbButton href="/components">Components</GnbButton>
    </div>
  );
};

export default Gnb;
