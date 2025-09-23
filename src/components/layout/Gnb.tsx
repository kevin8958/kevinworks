'use client';

import { useEffect, useState } from 'react';
import GnbButton from '@/components/layout/GnbButton';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const sections = ['home', 'about', 'projects', 'components'];
const Gnb = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: [0.25, 0.75] },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={classNames(
        'border-primary-100/30 fixed top-6 left-1/2 z-50 flex w-fit -translate-x-1/2 items-center justify-center gap-4 rounded-2xl border border-[1px] bg-transparent px-2 pt-1 pb-2 backdrop-blur transition-all duration-500 ease-in-out sm:px-6',
        { hidden: pathname.startsWith('/components') },
      )}
    >
      {sections.map((id) => (
        <GnbButton key={id} href={`#${id}`} isActive={currentSection === id}>
          {id.toUpperCase()}
        </GnbButton>
      ))}
    </div>
  );
};

export default Gnb;
