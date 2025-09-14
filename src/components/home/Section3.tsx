'use client';
import Typography from '@/components/common/Typography';
import SpotlightCard from '@/components/interaction/SpotlightCard';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

export default function Section3() {
  const projects = [
    {
      title: 'Sellease',
      year: 2025,
      imageUrl: '/image/sellease_thumbnail.png',
      altText: 'Sellease Thumbnail',
    },
    {
      title: 'AI space',
      year: 2024,
      imageUrl: '/image/aispace_thumbnail.png',
      altText: 'Aispace Thumbnail',
    },
    {
      title: 'Oligo',
      year: 2023,
      imageUrl: '/image/oligo_thumbnail.png',
      altText: 'Oligo Thumbnail',
    },
    {
      title: 'CamStudy',
      year: 2022,
      imageUrl: '/image/camstudy_thumbnail.png',
      altText: 'CamStudy Thumbnail',
    },
    {
      title: 'MedicalDB',
      year: 2021,
      imageUrl: '/image/medicaldb_thumbnail.png',
      altText: 'MedicalDB Thumbnail',
    },
  ];

  return (
    <section className="flex h-screen min-h-screen w-full snap-start flex-col items-center gap-10 overflow-y-scroll px-10 pt-10 pb-20">
      <div className="flex w-full max-w-[1000px] flex-col items-start gap-4">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="h4" classes="!text-[#50b4ff]">
              PROJECTS
            </Typography>
          </div>
        </div>
        <div className="grid w-full grid-cols-12 gap-y-10 md:gap-x-10 md:gap-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group col-span-12 md:col-span-6 ${index % 2 !== 0 ? 'md:mt-10' : ''}`}
            >
              <div className="flex w-full flex-col items-start gap-4">
                <div className="bg-primary-100 relative aspect-video w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    className="h-full w-full object-cover brightness-75 transition-all duration-500 ease-in-out group-hover:brightness-100"
                  />
                </div>
                <div className="flex w-full items-center justify-between px-2">
                  <Typography variant="h4" classes="!text-primary-100">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" classes="!text-primary-200">
                    {project.year}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
