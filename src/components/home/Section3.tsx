'use client';
import Typography from '@/components/common/Typography';
import SpotlightCard from '@/components/interaction/SpotlightCard';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

export default function Section3() {
  return (
    <div className="flex w-full flex-col items-center gap-10 bg-[linear-gradient(to_right,_transparent_20%,_rgba(80,180,255,0.1))] pb-20">
      <span className="bg-primary-100/10 h-px w-full"></span>
      <div className="flex w-full max-w-[1000px] flex-col items-start gap-4 px-10">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="h4" classes="!text-[#50b4ff]">
              PROJECTS
            </Typography>
          </div>
        </div>
        <div className="grid w-full grid-cols-12 gap-4">
          <SpotlightCard
            className="col-span-12 md:col-span-6 lg:col-span-4"
            spotlightColor="rgba(80, 180, 255, 0.7)"
          >
            <div className="flex w-full flex-col items-start gap-6 p-2">
              <div className="bg-primary-100 relative aspect-[3/2] w-full rounded-lg">
                <Image
                  src="/image/sellease_thumbnail.png"
                  fill
                  alt="Sellease Thumbnail"
                  className="rounded-lg object-cover"
                />
              </div>
              <Typography variant="h4" classes="!text-primary-100">
                Sellease
              </Typography>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="col-span-12 md:col-span-6 lg:col-span-4"
            spotlightColor="rgba(80, 180, 255, 0.7)"
          >
            <div className="flex w-full flex-col items-start gap-6">
              <div className="bg-primary-100 relative aspect-[3/2] w-full rounded-lg">
                <Image
                  src="/image/aispace_thumbnail.png"
                  fill
                  alt="Aispace Thumbnail"
                  className="rounded-lg object-cover"
                />
              </div>
              <Typography variant="h4" classes="!text-primary-100">
                AI space
              </Typography>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="col-span-12 md:col-span-6 lg:col-span-4"
            spotlightColor="rgba(80, 180, 255, 0.7)"
          >
            <div className="flex w-full flex-col items-start gap-6">
              <div className="bg-primary-100 relative aspect-[3/2] w-full rounded-lg">
                <Image
                  src="/image/oligo_thumbnail.png"
                  fill
                  alt="Oligo Thumbnail"
                  className="rounded-lg object-cover"
                />
              </div>
              <Typography variant="h4" classes="!text-primary-100">
                Oligo
              </Typography>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="col-span-12 md:col-span-6 lg:col-span-4"
            spotlightColor="rgba(80, 180, 255, 0.7)"
          >
            <div className="flex w-full flex-col items-start gap-6">
              <div className="bg-primary-100 relative aspect-[3/2] w-full rounded-lg">
                <Image
                  src="/image/camstudy_thumbnail.png"
                  fill
                  alt="CamStudy Thumbnail"
                  className="rounded-lg object-cover"
                />
              </div>
              <Typography variant="h4" classes="!text-primary-100">
                CamStudy
              </Typography>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="col-span-12 md:col-span-6 lg:col-span-4"
            spotlightColor="rgba(80, 180, 255, 0.7)"
          >
            <div className="flex w-full flex-col items-start gap-6">
              <div className="bg-primary-100 relative aspect-[3/2] w-full rounded-lg">
                <Image
                  src="/image/medicaldb_thumbnail.png"
                  fill
                  alt="MedicalDB Thumbnail"
                  className="rounded-lg object-cover"
                />
              </div>
              <Typography variant="h4" classes="!text-primary-100">
                MedicalDB
              </Typography>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
