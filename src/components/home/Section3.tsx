'use client';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import SpotlightCard from '@/components/interaction/SpotlightCard';
import { BsStars } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';

export default function Section3() {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <span className="bg-primary-100/10 h-px w-full"></span>
      <div className="flex w-[1000px] flex-col items-start gap-4 px-20">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="display2" classes="!text-[#50b4ff]">
              Projects
            </Typography>
          </div>
          <Button variant="clear" size="sm" classes="px-2 !text-primary-100/40">
            <Typography variant="body2" classes="!text-primary-100/40">
              VIEW ALL
            </Typography>
            <FiArrowRight className="ml-1 text-lg" />
          </Button>
        </div>
        <div className="grid w-full grid-cols-12 gap-4">
          <SpotlightCard className="col-span-4" spotlightColor="rgba(80, 180, 255, 0.7)">
            // Content goes here
          </SpotlightCard>
          <SpotlightCard className="col-span-4" spotlightColor="rgba(80, 180, 255, 0.7)">
            // Content goes here
          </SpotlightCard>
          <SpotlightCard className="col-span-4" spotlightColor="rgba(80, 180, 255, 0.7)">
            // Content goes here
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
