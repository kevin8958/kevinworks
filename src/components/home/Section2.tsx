'use client';
import Typography from '@/components/common/Typography';
import { BsStars } from 'react-icons/bs';
import LogoLoop from '@/components/interaction/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import FadeInGsap from '@/components/layout/FadeInGsap';

export default function Section2() {
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  ];

  interface Experience {
    company: string;
    description: string;
    period: string;
  }

  const experiences: Experience[] = [
    {
      company: 'Sellease',
      description:
        'Led development of a video consultation service for both customers and counselors.',
      period: 'May 2024 – June 2025',
    },
    {
      company: 'Hanwha Life Insurance (Via contract)',
      description: 'Worked on frontend infrastructure and UI libraries.',
      period: 'Nov 2023 - Jan 2024',
    },
    {
      company: 'Gooroomee',
      description:
        'Contributed to multiple live services including Gooroomee.com, AI Space, Oligo, and Camstudy.',
      period: 'Dec 2021 - Aug 2023',
    },
    {
      company: 'Lime Society / Research Factory',
      description: 'Worked on developing e-CRF medical data platforms for hospitals.',
      period: 'Sep 2020 - Dec 2021',
    },
  ];

  return (
    <section
      id="about"
      className="flex w-full max-w-[1000px] flex-col items-center gap-6 px-6 pt-20 pb-10 lg:px-0"
    >
      <div className="mb-2 flex w-full items-center gap-2">
        <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
        <Typography variant="h4" classes="!text-[#50b4ff]">
          ABOUT
        </Typography>
      </div>
      <div className="grid min-h-[500px] w-full max-w-[1000px] grid-cols-12 gap-4">
        <div className="col-span-12 flex size-full w-full shrink-0 flex-col items-start gap-4 md:col-span-6">
          <div className="flex w-full flex-col items-start gap-4">
            <Typography variant="h4" classes="!text-white w-full">
              Who am I
            </Typography>
            <FadeInGsap>
              <div className="flex w-full flex-col items-start gap-4">
                <Typography variant="body2" classes="!text-white">
                  Hi, I'm Kevin Lee. Front-end developer with 5 years of experience building
                  scalable, user-focused web applications.
                </Typography>
                <Typography variant="body2" classes="!text-white">
                  My work blends clean, maintainable code with thoughtful UX and design system
                  principles.
                </Typography>
                <Typography variant="body2" classes="!text-white">
                  I aim to create intuitive interfaces through empathy-driven design, and I'm
                  looking to grow with a team that values collaboration and continuous learning.
                </Typography>
              </div>
            </FadeInGsap>
            <div className="relative mt-8 h-[56px] w-full shrink-0 overflow-hidden">
              <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={24}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#0A0E19"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <Typography variant="h4" classes="!text-white w-full">
              Education
            </Typography>
            <FadeInGsap classes="w-full">
              <div className="bg-primary-900 flex w-full flex-col items-start gap-1 rounded-2xl px-4 py-10">
                <Typography variant="body1" classes="!text-white !font-semibold">
                  Bachelor in Computer Science
                </Typography>
                <Typography variant="body2" classes="!text-primary-200/70">
                  Kangwon National University ( South Korea )
                </Typography>
              </div>
            </FadeInGsap>
          </div>
        </div>
        <div className="col-span-12 flex w-full flex-col items-start gap-4 md:col-span-6">
          <div className="flex w-full flex-col items-start gap-4">
            <Typography variant="h4" classes="!text-white w-full">
              Exprience
            </Typography>
            <div className="bg-primary-900 flex w-full flex-col items-start gap-1 rounded-2xl px-4 py-6">
              <div className="border-primary-200/30 relative pl-6">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`before:bg-primary-200/30 relative flex flex-col pb-6 before:absolute before:top-2 before:-left-[13px] before:w-px last:pb-2 ${idx === experiences.length - 1 ? 'before:h-0' : 'before:h-[calc(100%)]'} `}
                  >
                    <span className="bg-primary-100 absolute top-2 -left-4 size-2 rounded-full" />
                    {/* 내용 */}
                    <div className="flex flex-col gap-1">
                      <FadeInGsap>
                        <Typography variant="body1" classes="!text-white !font-semibold">
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" classes="!text-primary-200/70">
                          {exp.description}
                        </Typography>
                        <Typography variant="caption" classes="mt-2 !text-primary-200/70">
                          {exp.period}
                        </Typography>
                      </FadeInGsap>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
