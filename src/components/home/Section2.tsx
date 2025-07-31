'use client';
import Typography from '@/components/common/Typography';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

const GradientCircle = () => {
  return (
    <div className="pointer-events-none inset-0 flex items-center justify-center">
      <div className="h-[360px] w-[360px] rounded-full bg-[radial-gradient(ellipse_at_top_left,_#50b4ff,_#1e1e45)] opacity-80" />
    </div>
  );
};

const SkillIcon = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="group bg-primary-900 flex items-center gap-2 rounded-lg p-2">
    <div className="flex h-4 w-4 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:scale-110">
      <Icon />
    </div>
    <span className="text-xs text-white">{label}</span>
  </div>
);

export default function Section2() {
  const icons = [
    {
      src: '/icon/html.svg',
      alt: 'HTML5',
      label: 'HTML',
    },
    {
      src: '/icon/css.svg',
      alt: 'CSS3',
      label: 'CSS',
    },
    {
      src: '/icon/js.svg',
      alt: 'JavaScript',
      label: 'JavaScript',
    },
    {
      src: '/icon/ts.svg',
      alt: 'TypeScript',
      label: 'TypeScript',
    },
    {
      src: '/icon/react.svg',
      alt: 'React',
      label: 'React',
    },
    {
      src: '/icon/next.svg',
      alt: 'Next.js',
      label: 'Next.js',
    },
    {
      src: '/icon/vue.svg',
      alt: 'Vue.js',
      label: 'Vue.js',
    },
    {
      src: '/icon/nuxt.svg',
      alt: 'Nuxt.js',
      label: 'Nuxt.js',
    },
    {
      src: '/icon/mobx.svg',
      alt: 'MobX',
      label: 'MobX',
    },
    {
      src: '/icon/pinia.png',
      alt: 'Pinia',
      label: 'Pinia',
    },
    {
      src: '/icon/tailwind.svg',
      alt: 'Tailwind CSS',
      label: 'Tailwind CSS',
    },
    {
      src: '/icon/material-ui.svg',
      alt: 'Material-UI',
      label: 'Material-UI',
    },
  ];
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <span className="bg-primary-100/10 h-px w-full"></span>
      <div className="flex w-[1000px] items-center justify-between gap-20 px-20">
        <div className="flex w-full max-w-[400px] flex-col items-start gap-4">
          <div className="flex w-full items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="display2" classes="!text-[#50b4ff]">
              About
            </Typography>
          </div>
          <Typography variant="body2" classes="mt-2 opacity-80">
            Front-end developer with 5 years of experience building scalable, user-focused web
            applications.
          </Typography>
          <Typography variant="body2" classes="opacity-80">
            My work blends clean, maintainable code with thoughtful UX and design system principles.
          </Typography>
          <Typography variant="body2" classes="opacity-80">
            I aim to create intuitive interfaces through empathy-driven design, and I'm looking to
            grow with a team that values collaboration and continuous learning.
          </Typography>
          <div className="mt-4 flex flex-wrap gap-2">
            {icons.map((icon) => (
              <SkillIcon
                key={icon.label}
                icon={() => (
                  <Image src={icon.src} alt={icon.alt} width={16} height={16} className="h-4 w-4" />
                )}
                label={icon.label}
              />
            ))}
          </div>
        </div>
        <div className="relative h-fit w-fit">
          <GradientCircle />
          {/* <img
          src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-19ac-61f8-bd96-c89d5969b5dc/raw?se=2025-07-30T11%3A57%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=6b8a3ea6-f9b8-5698-86ee-d1a229eae636&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-29T18%3A51%3A50Z&ske=2025-07-30T18%3A51%3A50Z&sks=b&skv=2024-08-04&sig=VmvMSnjXM3vFuRDU1CoHJSdvfuemBXaTffJ88JueR9M%3D"
          alt="Profile"
          className="absolute top-1/2 left-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
        /> */}
        </div>
      </div>
    </div>
  );
}
