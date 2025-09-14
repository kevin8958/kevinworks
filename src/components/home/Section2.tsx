'use client';
import Typography from '@/components/common/Typography';
import { BsStars } from 'react-icons/bs';

export default function Section2() {
  return (
    <section className="flex h-screen min-h-screen w-full snap-start flex-col items-center gap-10 pb-10">
      <div className="flex size-full max-w-[1000px] items-center gap-4">
        <div className="flex size-full flex-col items-start justify-between">
          <div className="flex w-full max-w-[400px] shrink-0 flex-col items-center gap-4 pt-20 pl-10">
            <div className="mb-2 flex w-full items-center gap-2">
              <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
              <Typography variant="h4" classes="!text-[#50b4ff]">
                ABOUT
              </Typography>
            </div>
            <Typography variant="h3" classes="!text-white w-full">
              Hi, I'm Kevin Lee.
            </Typography>
            <Typography variant="body2" classes="!text-white">
              Front-end developer with 5 years of experience building scalable, user-focused web
              applications.
            </Typography>
            <Typography variant="body2" classes="!text-white">
              My work blends clean, maintainable code with thoughtful UX and design system
              principles.
            </Typography>
            <Typography variant="body2" classes="!text-white">
              I aim to create intuitive interfaces through empathy-driven design, and I'm looking to
              grow with a team that values collaboration and continuous learning.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
