'use client';
import React, { useState } from 'react';
import Typography from '@/components/common/Typography';
import classNames from 'classnames';
import { BsStars } from 'react-icons/bs';
import Link from 'next/link';
import Section4 from '@/components/home/Section4';

export default function Index() {
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Sellease',
      year: 2025,
      imageUrl: '/image/sellease_thumbnail.png',
      altText: 'Sellease Thumbnail',
      href: '/projects/sellease',
    },
    {
      title: 'AI space',
      year: 2024,
      imageUrl: '/image/aispace_thumbnail.png',
      altText: 'Aispace Thumbnail',
      href: '/projects/aispace',
    },
    {
      title: 'Oligo',
      year: 2023,
      imageUrl: '/image/oligo_thumbnail.png',
      altText: 'Oligo Thumbnail',
      href: '/projects/oligo',
    },
    {
      title: 'CamStudy',
      year: 2022,
      imageUrl: '/image/camstudy_thumbnail.png',
      altText: 'CamStudy Thumbnail',
      href: '/projects/camstudy',
    },
    {
      title: 'MedicalDB',
      year: 2021,
      imageUrl: '/image/medicaldb_thumbnail.png',
      altText: 'MedicalDB Thumbnail',
      href: '/projects/medicaldb',
    },
  ];
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-cols-12 gap-y-10 px-10 pt-20 md:gap-x-10 md:gap-y-0">
        <div className="col-span-12 mb-10 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="h4" classes="!text-[#50b4ff]">
              PROJECTS
            </Typography>
          </div>
        </div>
        {projects.map((project, index) => (
          <Link
            key={index}
            className={classNames('col-span-12 md:col-span-6', {
              'md:mt-10': index % 2 !== 0,
              'hidden sm:block': index >= 3,
            })}
            href={project.href}
            onMouseEnter={() => setFocusedProject(index + 1)}
            onMouseLeave={() => setFocusedProject(null)}
          >
            <div className="flex w-full flex-col items-start gap-4">
              <div className="bg-primary-100 relative aspect-video w-full overflow-hidden rounded-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className={classNames(
                    'h-full w-full object-cover transition-all duration-500 ease-in-out',
                    focusedProject === index + 1 ? 'scale-105' : 'scale-100',
                    !!focusedProject && focusedProject !== index + 1 ? 'brightness-50' : '',
                  )}
                />
              </div>
              <div className="flex w-full items-center justify-between px-2">
                <Typography
                  variant="h4"
                  classes={
                    '!text-primary-100' +
                    (!!focusedProject && focusedProject !== index + 1 ? ' opacity-50' : '')
                  }
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  classes={
                    '!text-primary-200' +
                    (!!focusedProject && focusedProject !== index + 1 ? ' opacity-50' : '')
                  }
                >
                  {project.year}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Section4 />
    </div>
  );
}
