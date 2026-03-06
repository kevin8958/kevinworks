'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const Oligo = ({
  isOpen,
  onClose,
  onChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  onChange: (page: number) => void;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const features = [
    {
      title: 'Main Landing Page Development',
      description:
        'Developed the main landing page with smooth UI animations using CSS Animation, Slick, and AOS. Implemented features such as email sending, text copy functionality, and integrated ChannelTalk for real-time customer communication.',
    },
    {
      title: 'Admin Dashboard Development',
      description:
        'Built an admin dashboard interface using DaisyUI. Implemented custom data visualization charts with Chart.js to display key platform metrics and improve administrative insights.',
      imageUrl: '/image/features/oligo/Dashboard Feature Screenshot.png',
      imageAlt: 'Admin Dashboard Feature Screenshot',
    },
    {
      title: 'Bulletin Board Management System',
      description:
        'Developed a board management system with filtering and search functionality. Implemented Excel export, template download and upload features, bulk email sending, custom pagination and tables, and a custom date picker using vue2-datepicker. Also enabled direct navigation to active CamStudy rooms and provided tools to manage service information and monitor participation status.',
      imageUrl: '/image/features/oligo/Board Management Feature Screenshot.png',
      imageAlt: 'Board Management Feature Screenshot',
    },
    {
      title: 'User Profile Management',
      description:
        'Built a profile management page with image upload functionality and address search using the Kakao Maps API to improve user profile management and location input.',
      imageUrl: '/image/features/oligo/Profile Feature Screenshot.png',
      imageAlt: 'Profile Feature Screenshot',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={4}
        title="Oligo"
        year="2023"
        href="https://oligo.gooroomee.com/"
        backgroundImage="/image/oligo_thumbnail.png"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Gooroommee
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              Admin dashboard with charts, bulletin board, email, and profile page using daisyUI and
              Chart.js.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Pinia', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'].map((tech, idx) => (
                <Badge key={idx} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="list-inside list-none pl-2">
              {[
                'Developed an academy management admin dashboard using Nuxt.js, Pinia, and Tailwind CSS.',
                'Implemented key features including data visualization charts, bulletin board management, email interface, and user profile pages.',
                'Built responsive and maintainable UI components to support efficient administrative workflows.',
              ].map((item, idx) => (
                <li key={idx} className="mb-2 flex items-start gap-2">
                  <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-neutral-200" />
                  <Typography variant="B2" classes="!text-neutral-200">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="H4" classes="!text-neutral-200">
              🧩 Features
            </Typography>
            <ul className="list-inside list-none pl-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="mb-2 flex flex-col items-start gap-2 border-b border-neutral-800 pt-4 pb-6"
                >
                  <FlexWrapper classes="size-full md:flex-row" direction="col" items="start">
                    <FlexWrapper classes="w-full" items="start" direction="col">
                      <Typography variant="H4">{feature.title}</Typography>
                      <Typography variant="B1">{feature.description}</Typography>
                    </FlexWrapper>
                    {feature.imageUrl && (
                      <Image
                        src={feature.imageUrl}
                        width={300}
                        height={200}
                        onClick={() => setPreviewImage(feature.imageUrl)}
                        alt={feature.imageAlt || 'Feature Screenshot'}
                        className="cursor-pointer rounded-lg"
                      />
                    )}
                  </FlexWrapper>
                </li>
              ))}
            </ul>
          </div>
        }
      />
      {previewImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Feature Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-3xl font-light text-white hover:opacity-70"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Oligo;
