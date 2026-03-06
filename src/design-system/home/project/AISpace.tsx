'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const AISpace = ({
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
      title: 'AI Playground (Model Comparison & Chat)',
      description:
        'Developed an AI playground where users can compare responses from different AI models by asking the same question. Implemented a chat interface with template-based prompts to quickly test and interact with multiple models.',
      imageUrl: '/image/features/aispace/playground_feature.png',
      imageAlt: 'AI Playground Feature Screenshot',
    },
    {
      title: 'Conversation History Page',
      description:
        'Built a history page that retrieves and displays previous conversations through API integration, allowing users to easily review and manage past interactions.',
      imageUrl: '/image/features/aispace/history_feature.png',
      imageAlt: 'History Page Feature Screenshot',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Implemented an analytics page with custom data visualization using Chart.js. Added a sample preview feature using the Faker library to demonstrate chart behavior when real data is unavailable.',
      imageUrl: '/image/features/aispace/statistics_feature.png',
      imageAlt: 'Analytics Dashboard Feature Screenshot',
    },
    {
      title: 'AI Creator & Assistant Builder',
      description:
        'Developed a feature that allows users to create their own AI assistant by uploading data and configuring prompts. The assistant generates responses based on the uploaded content and prompt settings, enabling customized AI interactions.',
      imageUrl: '/image/features/aispace/ai_creator_feature.png',
      imageAlt: 'AI Creator Feature Screenshot',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={3}
        title="AI Space"
        year="2023"
        backgroundImage="/image/aispace_thumbnail.png"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Gooroommee
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              AI Space is an AI service platform that allows users to create and share customized
              chatbots using various AI models.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Zustand', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'].map((tech, idx) => (
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

export default AISpace;
