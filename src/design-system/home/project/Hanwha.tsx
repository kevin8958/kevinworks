'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const Hanwha = ({
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
      title: 'Admin Dashboard for Consultation Management',
      description:
        'Developed an admin dashboard for managing consultation services. Implemented analytics using Chart.js and a bulletin board system to monitor service statistics and manage consultants. Added configuration features for consultation schedules and operating dates, along with tools to review recorded consultations, audio recordings, and STT (speech-to-text) transcripts.',
    },
    {
      title: 'Consultant Management Interface',
      description:
        'Built a consultation management page for consultants to handle incoming requests and connect them to live consultation sessions. Implemented features for viewing past consultation history and adding internal notes for better client management.',
    },
    {
      title: 'Real-time Video Consultation Service',
      description:
        'Developed a real-time video consultation interface for both consultants and clients based on Gooroomee’s video communication service. Implemented P2P-based video connections along with identity verification via ID card capture, document submission and classification, SMS and simple authentication for secondary verification, and collaboration features such as contract sharing, account sharing, and shared notes.',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={4}
        title="Hanwha Life Insurance"
        year="2023.11-2024.01"
        backgroundImage="/image/hanwha_thumbnail.jpeg"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Gooroommee
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              Developed a real-time video consultation service for both customers and counselors.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['Nuxt.js', 'Vue.js', 'Pinia', 'Vuex', 'WebRTC', 'Chart.js', 'HTML/CSS'].map(
                (tech, idx) => (
                  <Badge key={idx} size="sm">
                    {tech}
                  </Badge>
                ),
              )}
            </div>
            <ul className="list-inside list-none pl-2">
              {[
                'Developed Admin and Management pages using Nuxt.js and Pinia.',
                'Built video consultation platform using WebRTC (Gooroomee base) with features like document submission, authentication, note sharing, and P2P video chat.',
                'Integrated dashboards using Chart.js and managed real-time consultation settings, STT, and recording playback.',
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

export default Hanwha;
