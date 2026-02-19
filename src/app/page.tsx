'use client';
import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';
import Section1 from '@/design-system/home/Section1';
import Section2 from '@/design-system/home/Section2';
import Section3 from '@/design-system/home/Section3';
import Section4 from '@/design-system/home/Section4';
import PlanetBackground from '@/design-system/layout/PlanetBackground';
import classNames from 'classnames';

export default function Index() {
  const designSystem = {
    title: 'Kevin Design System',
    year: '2025.07~2025.09',
    imageUrl: '/image/designsystem_thumbnail.png',
    altText: 'Design System Thumbnail',
    href: '/design-system',
    spec: ['Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    desc: 'A comprehensive design system and component library built with React, Next.js, and Tailwind CSS to streamline UI development and ensure design consistency across projects.',
    contents: [
      'Developed a modular and reusable component library using React and TypeScript, enhancing development efficiency.',
      'Implemented responsive design principles with Tailwind CSS to ensure components adapt seamlessly across devices.',
      'Integrated Storybook for interactive component documentation, facilitating easier collaboration between designers and developers.',
      'Established best practices for component usage and theming, promoting consistency in UI/UX design across various applications.',
    ],
  };

  return (
    <div className="relative flex w-full flex-col items-center text-white">
      <PlanetBackground />
      <div
        className={classNames(
          'pointer-events-none fixed top-0 left-0 z-40 h-[120px] w-full opacity-100',
          'from-neutral-990 bg-gradient-to-b to-transparent',
        )}
      />
      <Section1 />
      <Section2 />
      <div className="my-20 flex w-full flex-col items-center gap-6 px-4">
        <div className="border-neutral-990 relative box-border aspect-video min-h-[300px] w-full max-w-[600px] overflow-hidden rounded-2xl border-[2px]">
          <img
            src={designSystem.imageUrl}
            alt={designSystem.altText}
            className={classNames(
              'h-full w-full object-cover brightness-50 transition-all duration-500 ease-in-out',
            )}
          />

          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-white uppercase">
              Under Development
            </span>
          </div>
        </div>

        <Typography variant="H3" classes={'!text-neutral-100 !font-semibold'}>
          {designSystem.title}
        </Typography>

        <Button variant="contain" size="sm" onClick={() => window.open('/design-system', '_self')}>
          Explore System
        </Button>

        <Typography variant="B2" classes={'!text-neutral-200 max-w-[480px] text-center'}>
          {designSystem.desc}
        </Typography>
      </div>
      <Section3 />
      <Section4 />
      <div
        className={classNames(
          'pointer-events-none fixed bottom-0 left-0 z-40 h-[200px] w-full opacity-100',
          'to-neutral-990 bg-gradient-to-b from-transparent',
        )}
      />
    </div>
  );
}
