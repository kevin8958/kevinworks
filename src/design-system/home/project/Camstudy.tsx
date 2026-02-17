'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const Camstudy = ({
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
      title: 'D-Day Widget Integration',
      description:
        'Developed a feature that allows users to set a D-Day on the main page and view it as a widget within the study room page. This ensures consistent visibility of important study goals across pages.',
      imageUrl: '/image/features/camstudy/D-Day Widget Integration Feature Screenshot.png',
      imageAlt: 'D-Day Widget Integration Feature Screenshot',
    },
    {
      title: 'Account Deletion Feature',
      description:
        'Implemented an in-site account deletion feature to replace the previous manual email-based process, improving user autonomy and operational efficiency.',
      imageUrl: '/image/features/camstudy/Account Deletion Feature Screenshot.png',
      imageAlt: 'Account Deletion Feature Screenshot',
    },
    {
      title: 'Site-wide QA Improvements',
      description:
        'Collaborated with the newly established QA team to fix site-wide issues, enhance existing features, and refine the overall UI for better usability and visual consistency.',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={5}
        title="CamStudy"
        year="2022-2023"
        href="https://gooroomee.com/intro"
        backgroundImage="/image/camstudy_thumbnail.png"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Gooroommee
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              Study service with video calls as the core feature, enabling real-time collaboration
              and learning.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['Vue.js', 'Vuex', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'].map((tech, idx) => (
                <Badge key={idx} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="list-inside list-none pl-2">
              {[
                'Developed AI playground and creator tool in AI Space using Next.js and Zustand, enabling chatbot customization and model comparison.',
                'Implemented features like prompt management, conversation history, and multi-model support (OpenAI, Azure, etc.).',
                'Optimized performance and responsiveness with Tailwind CSS, ensuring a seamless user experience across devices.',
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

export default Camstudy;
