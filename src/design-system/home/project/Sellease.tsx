'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const Sellease = ({
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
      title: 'Asset Management Dashboard',
      description:
        'Engineered a centralized dashboard providing a holistic view of corporate assets. Utilizing Chart.js, I visualized monthly subscription/rental costs and software usage metrics by type and location, enabling data-driven administrative decision-making.',
      imageUrl: '/image/features/sellease/Dashboard.png',
      imageAlt: 'Asset Management Dashboard Interface',
    },
    {
      title: 'Tangible Asset Lifecycle Management',
      description:
        'Developed a robust system for tracking physical assets, including automated depreciation calculations compliant with local and international accounting standards. Implemented Excel bulk operations, QR code-based inventory tracking, and optimized label printing layouts for A4 inkjet media.',
      imageUrl: '/image/features/sellease/TangibleAsset.png',
      imageAlt: 'Tangible Asset Management Interface',
    },
    {
      title: 'Intangible & Subscription Tracking',
      description:
        'Built a specialized management module for domains, certificates, and licenses. Integrated a customizable notification system (ranging from 1 to 180 days prior to expiry) to mitigate operational risks and ensure continuous compliance of software and rental contracts.',
      imageUrl: '/image/features/sellease/IntangibleAsset.png',
      imageAlt: 'Intangible Asset Monitoring Interface',
    },
    {
      title: 'Software Asset Management (SAM) Agent',
      description:
        'Architected a software tracking system integrated with PC agents for Windows and Mac. Designed data-intensive interfaces to analyze software penetration rates, average usage time, and unauthorized software detection, helping organizations optimize license costs.',
      imageUrl: '/image/features/sellease/SoftwareManagement.png',
      imageAlt: 'Software Management and Analysis Tool',
    },
    {
      title: 'AI-Powered Asset Assistant',
      description:
        'Integrated an AI agent to simplify access to complex corporate asset data and company policies. Developed features for automated monthly service reporting and a retrieval-augmented chatbot to provide instant summaries of tangible and intangible asset status.',
      imageUrl: '/image/features/sellease/AIAgent.png',
      imageAlt: 'AI Asset Assistant Chatbot Interface',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={4}
        title="Sellease"
        year="2024.05-2025.05"
        backgroundImage="/image/sellease_thumbnail.png"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Sellease
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              Independently built the entire frontend from the ground up, including both the asset
              management service and the back-office system.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Pinia', 'Tailwind CSS', 'Chart.js', 'HTML/CSS'].map((tech, idx) => (
                <Badge key={idx} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="list-inside list-none pl-2">
              {[
                'Built an intuitive admin dashboard enabling counselor management.',
                'Developed analytics pages using Chart.js to visualize consultation statistics and counselor performance metrics.',
                'Ensured mobile responsiveness and accessibility compliance across all screens.',
                'Collaborated with back-end and design teams in Agile sprints, contributing to improved development velocity and user satisfaction.',
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
                        width={feature.title === 'AI-Powered Asset Assistant' ? 100 : 300}
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

export default Sellease;
