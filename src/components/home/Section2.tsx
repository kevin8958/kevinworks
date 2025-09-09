'use client';
import Typography from '@/components/common/Typography';
import SkillIcons from './SkillIcons';
import { BsStars } from 'react-icons/bs';

export default function Section2() {
  return (
    <div className="flex w-full flex-col items-center gap-10 bg-[linear-gradient(to_right,_rgba(180,100,255,0.1),_transparent_80%)] pb-10">
      <span className="bg-primary-100/10 h-px w-full"></span>
      <div className="flex min-h-[500px] w-full max-w-[1000px] items-center gap-4">
        <div className="flex w-full flex-col items-center lg:flex-row">
          <div className="flex w-full max-w-[400px] shrink-0 flex-col items-center gap-4 pl-10">
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
          <div className="h-[400px] w-full lg:w-[calc(100%-400px)]">
            <SkillIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
