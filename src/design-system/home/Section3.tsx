'use client';
import { useState } from 'react';
import Typography from '@/design-system/foundation/Typography';
import { BsStars } from 'react-icons/bs';
import classNames from 'classnames';
import FadeInGsap from '@/design-system/layout/FadeInGsap';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Badge from '@/design-system/components/Badge';
import MedicalDB from './project/MedicalDB';
import Camstudy from './project/Camstudy';

export default function Section3() {
  const [focusedProject, setFocusedProject] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Effice',
      year: '2025.10-2026.01',
      imageUrl: '/image/effice_thumbnail.png',
      altText: 'Effice Thumbnail',
      href: 'https://www.effice.co.kr/',
      spec: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'HTML/CSS'],
      desc: 'A specialized back-office outsourcing platform that provides comprehensive management support, including HR, accounting, and legal contract management for small to medium-sized enterprises.',
      contents: [
        'Architected a real-time task management board using React and Supabase, allowing clients to monitor the progress of their administrative requests in real-time.',
        'Developed secure modules for HR and accounting support, automating repetitive back-office tasks and ensuring compliance with local regulations.',
        'Integrated Supabase Auth and Row Level Security (RLS) to manage sensitive corporate data and contract documents with enterprise-grade security.',
        'Built a responsive and intuitive dashboard with Tailwind CSS to streamline communication between client companies and the dedicated Effice operations team.',
      ],
    },
    {
      title: 'Sellease',
      year: '2024.05-2025.05',
      imageUrl: '/image/sellease_thumbnail.png',
      altText: 'Sellease Thumbnail',
      href: 'https://www.sellease.io/',
      spec: ['Next.js', 'Pinia', 'Tailwind CSS', 'Chart.js', 'HTML/CSS'],
      desc: 'Independently built the entire frontend from the ground up, including both the asset management service and the back-office system.',
      contents: [
        'Built an intuitive admin dashboard enabling counselor management.',
        'Developed analytics pages using Chart.js to visualize consultation statistics and counselor performance metrics.',
        'Ensured mobile responsiveness and accessibility compliance across all screens.',
        'Collaborated with back-end and design teams in Agile sprints, contributing to improved development velocity and user satisfaction.',
      ],
    },
    {
      title: 'Hanwha Life Insurance',
      year: '2023.11-2024.01',
      imageUrl: '/image/hanwha_thumbnail.jpeg',
      altText: 'Hanwha Life Insurance Thumbnail',
      spec: ['Nuxt.js', 'Vue.js', 'Pinia', 'Vuex', 'WebRTC', 'Chart.js', 'HTML/CSS'],
      desc: 'Developed a real-time video consultation service for both customers and counselors.',
      contents: [
        'Developed Admin and Management pages using Nuxt.js and Pinia.',
        'Built video consultation platform using WebRTC (Gooroomee base) with features like document submission, authentication, note sharing, and P2P video chat.',
        'Integrated dashboards using Chart.js and managed real-time consultation settings, STT, and recording playback.',
      ],
    },
    {
      title: 'AI space',
      year: '2023',
      imageUrl: '/image/aispace_thumbnail.png',
      altText: 'Aispace Thumbnail',
      spec: ['Next.js', 'Zustand', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
      desc: 'AI Space is an AI service platform that allows users to create and share customized chatbots using various AI models.',
      contents: [
        'Developed AI playground and creator tool in AI Space using Next.js and Zustand, enabling chatbot customization and model comparison.',
        'Implemented features like prompt management, conversation history, and multi-model support (OpenAI, Azure, etc.).',
        'Optimized performance and responsiveness with Tailwind CSS, ensuring a seamless user experience across devices.',
      ],
    },
    {
      title: 'Oligo',
      year: '2023',
      imageUrl: '/image/oligo_thumbnail.png',
      altText: 'Oligo Thumbnail',
      href: 'https://oligo.gooroomee.com/',
      spec: ['Next.js', 'Pinia', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
      desc: 'Admin dashboard with charts, bulletin board, email, and profile page using daisyUI and Chart.js.',
      contents: [
        'Developed AI playground and creator tool in AI Space using Next.js and Zustand, enabling chatbot customization and model comparison.',
        'Implemented features like prompt management, conversation history, and multi-model support (OpenAI, Azure, etc.).',
        'Optimized performance and responsiveness with Tailwind CSS, ensuring a seamless user experience across devices.',
      ],
    },
    {
      title: 'CamStudy',
      year: '2022-2023',
      imageUrl: '/image/camstudy_thumbnail.png',
      altText: 'CamStudy Thumbnail',
      href: 'https://gooroomee.com/intro',
      spec: ['Vue.js', 'Vuex', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
      desc: 'Study service with video calls as the core feature, enabling real-time collaboration and learning.',
      contents: [
        'Developed AI playground and creator tool in AI Space using Next.js and Zustand, enabling chatbot customization and model comparison.',
        'Implemented features like prompt management, conversation history, and multi-model support (OpenAI, Azure, etc.).',
        'Optimized performance and responsiveness with Tailwind CSS, ensuring a seamless user experience across devices.',
      ],
    },
    {
      title: 'MedicalDB',
      year: '2020.09-2021.12',
      imageUrl: '/image/medicaldb_thumbnail.png',
      altText: 'MedicalDB Thumbnail',
      href: 'https://www.notion.so/MedicalDB-fc116926adc04ad68bffc62b64c026cc',
      spec: ['React.js', 'TypeScript', 'Material-UI', 'PostgreSQL', 'Knex'],
      desc: 'e-CRF medical data platform for hospital clinical research workflows.',
      contents: [
        'Developed UIs for MedicalDB and SPS using React and Next.js.',
        'Implemented data validation, record revision recovery, custom filtering and Excel export optimization.',
        'Improved scheduling features and introduced form grouping and required data alerts.',
      ],
    },
  ];

  return (
    <section
      id="works"
      className="flex w-full flex-col items-center gap-10 px-6 pt-20 pb-10 lg:px-10"
    >
      <div className="flex w-full max-w-[1000px] flex-col items-start gap-4">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <BsStars className="shrink-0 text-xl !text-[#50b4ff]" />
            <Typography variant="H3" classes="!text-[#50b4ff]">
              WORKS
            </Typography>
          </div>
        </div>
        <div className="grid w-full grid-cols-12 gap-y-10 md:gap-x-10 md:gap-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={classNames('col-span-12 md:col-span-6', {
                'md:mt-[60px]': index % 2 !== 0,
              })}
              onMouseEnter={() => setFocusedProject(index + 1)}
              onMouseLeave={() => setFocusedProject(null)}
              onClick={() => setOpenProject(index)}
            >
              <FadeInGsap>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="border-primary-990 relative box-border aspect-video w-full overflow-hidden rounded-2xl border-[2px]">
                    <img
                      src={project.imageUrl}
                      alt={project.altText}
                      className={classNames(
                        'h-full w-full object-cover transition-all duration-500 ease-in-out',
                        focusedProject === index + 1 ? 'scale-105' : 'scale-100',
                        !!focusedProject && focusedProject !== index + 1
                          ? 'brightness-50'
                          : 'brightness-80',
                      )}
                    />
                  </div>
                  <div className="flex w-full items-center justify-between px-2">
                    <Typography
                      variant="B1"
                      classes={
                        '!text-primary-100 !font-semibold' +
                        (!!focusedProject && focusedProject !== index + 1 ? ' opacity-50' : '')
                      }
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="B2"
                      classes={
                        '!text-primary-200' +
                        (!!focusedProject && focusedProject !== index + 1 ? ' opacity-50' : '')
                      }
                    >
                      {project.year}
                    </Typography>
                  </div>
                </div>
              </FadeInGsap>
            </div>
          ))}
        </div>
      </div>
      <Camstudy
        isOpen={openProject === 5}
        onClose={() => setOpenProject(null)}
        onChange={(page: number) => setOpenProject(page)}
      />
      <MedicalDB
        isOpen={openProject === 6}
        onClose={() => setOpenProject(null)}
        onChange={(page: number) => setOpenProject(page)}
      />
      <ProjectModal
        isOpen={openProject !== null && openProject !== 6 && openProject !== 5}
        onClose={() => setOpenProject(null)}
        onChange={(page: number) => setOpenProject(page)}
        title={projects[openProject ?? 0]?.title}
        year={projects[openProject ?? 0]?.year}
        href={projects[openProject ?? 0]?.href}
        backgroundImage={projects[openProject ?? 0]?.imageUrl}
        currentPage={openProject ?? 0}
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B1" classes="!text-primary-200">
              {projects[openProject ?? 0]?.desc}
            </Typography>
            <ul className="list-inside list-none pl-2">
              {projects[openProject ?? 0]?.contents?.map((item, idx) => (
                <li key={idx} className="mb-2 flex items-start gap-2">
                  <span className="bg-primary-200 mt-2 inline-block size-1 shrink-0 rounded-full" />
                  <Typography variant="B2" classes="!text-primary-200">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {projects[openProject ?? 0]?.spec?.map((tech, idx) => (
                <Badge key={idx} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        }
      />
    </section>
  );
}
