'use client';

import React, { useState } from 'react';
import ProjectModal from '@/design-system/layout/ProjectModal';
import Typography from '@/design-system/foundation/Typography';
import Badge from '@/design-system/components/Badge';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Image from 'next/image';

const MedicalDB = ({
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
      title: 'Concurrent Editing Prevention',
      description:
        'Implemented a permission-based system to prevent multiple users from editing the same record simultaneously. Permissions are released when closing the editor or upon browser exit to avoid data overwriting.',
      imageUrl: '/image/features/medicaldb/Concurrent Editing Prevention Feature Screenshot.png',
      imageAlt: 'Concurrent Editing Prevention Feature Screenshot',
    },
    {
      title: 'Excel Download Performance Improvement',
      description:
        'Improved Excel export speed by caching intermediate data during the generation process, reducing processing time and improving user experience.',
    },
    {
      title: 'Data Revision Recovery',
      description:
        'Added functionality to view and restore previous data revisions that were previously stored only for backup purposes.',
      imageUrl: '/image/features/medicaldb/Data Revision Recovery Feature Screenshot.png',
      imageAlt: 'Data Revision Recovery Feature Screenshot',
    },
    {
      title: 'Form Selector',
      description:
        'Introduced a form switcher that allows users to navigate between related forms within the same record without closing the current editor, enhancing workflow efficiency.',
      imageUrl: '/image/features/medicaldb/Form Selector Feature Screenshot.png',
      imageAlt: 'Form Selector Feature Screenshot',
    },
    {
      title: 'Custom Sorting Data',
      description:
        'Added a custom sort key feature allowing users to define their own data order instead of relying on automatically assigned system IDs.',
      imageUrl: '/image/features/medicaldb/Custom Sorting Data Feature Screenshot.png',
      imageAlt: 'Custom Sorting Data Feature Screenshot',
    },
    {
      title: 'Persistent Filters',
      description:
        'Enabled users to pin frequently used filters to the interface for quick access without reopening the filter settings panel each time.',
      imageUrl: '/image/features/medicaldb/Persistent Filters Feature Screenshot.png',
      imageAlt: 'Persistent Filters Feature Screenshot',
    },
    {
      title: 'Filter Grouping',
      description:
        'Enhanced the search system by introducing grouped filters, allowing users to create complex AND/OR filter combinations for more detailed queries.',
      imageUrl: '/image/features/medicaldb/Filter Grouping Feature Screenshot.png',
      imageAlt: 'Filter Grouping Feature Screenshot',
    },
    {
      title: 'Excel Upload Data Validation',
      description:
        'Implemented validation logic for Excel uploads to verify data types, required fields, and option consistency, preventing invalid data input.',
      imageUrl: '/image/features/medicaldb/Excel Upload Data Validation Feature Screenshot.png',
      imageAlt: 'Excel Upload Data Validation Feature Screenshot',
    },
    {
      title: 'Form Grouping within Research Projects',
      description:
        'Allowed users to group related forms within a single research project for easier management of large datasets.',
      imageUrl:
        '/image/features/medicaldb/Form Grouping within Research Projects Feature Screenshot.png',
      imageAlt: 'Form Grouping within Research Projects Feature Screenshot',
    },
    {
      title: 'Missing Required Data Alerts',
      description:
        'Added an alert system that lists incomplete required fields and links directly to each missing entry for quick correction.',
      imageUrl: '/image/features/medicaldb/Missing Required Data Alerts Feature Screenshot.png',
      imageAlt: 'Missing Required Data Alerts Feature Screenshot',
    },
    {
      title: 'Data Priority Levels',
      description:
        'Introduced a data importance system with three levels—Required, Recommended, and None—displaying the count and list of missing items in each category.',
      imageUrl: '/image/features/medicaldb/Data Priority Levels Feature Screenshot.png',
      imageAlt: 'Data Priority Levels Feature Screenshot',
    },
    {
      title: 'Appointment Sequence Numbering',
      description:
        'Implemented an automatic sequence system that assigns appointment numbers per patient and type to distinguish between initial and follow-up visits.',
      imageUrl: '/image/features/sps/Appointment Sequence Numbering Feature Screenshot.png',
      imageAlt: 'Appointment Sequence Numbering Feature Screenshot',
    },
    {
      title: 'Schedule and Patient List UI/UX Redesign',
      description:
        'Revamped the list interface using DataGrid with sortable columns, CSV export, and improved search fields for a more intuitive user experience.',
      imageUrl:
        '/image/features/sps/Schedule and Patient List UIUX Redesign Feature Screenshot.png',
      imageAlt: 'Schedule and Patient List UI/UX Redesign Feature Screenshot',
    },
    {
      title: 'Queue Side View',
      description:
        'Added a queue sidebar alongside the calendar view to improve search efficiency and make appointment management more seamless.',
      imageUrl: '/image/features/sps/Queue Side View Feature Screenshot.png',
      imageAlt: 'Queue Side View Feature Screenshot',
    },
    {
      title: 'Medical Form Search Tool',
      description:
        'Developed a patient search feature that retrieves results based on specific values entered within medical record forms.',
      imageUrl: '/image/features/sps/Medical Form Search Tool Feature Screenshot.png',
      imageAlt: 'Medical Form Search Tool Feature Screenshot',
    },
  ];

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        onChange={onChange}
        currentPage={6}
        title="MedicalDB"
        year="2021-2022"
        href="https://www.notion.so/MedicalDB-fc116926adc04ad68bffc62b64c026cc"
        backgroundImage="/image/medicaldb_thumbnail.png"
        content={
          <div className="flex flex-col gap-4">
            <Typography variant="B2" classes="!text-neutral-300">
              Lime Society / Research Factory
            </Typography>
            <Typography variant="B1" classes="!text-neutral-200">
              e-CRF medical data platform for hospital clinical research workflows.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'TypeScript', 'Material-UI', 'PostgreSQL', 'Knex'].map((tech, idx) => (
                <Badge key={idx} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <ul className="list-inside list-none pl-2">
              {[
                'Developed UIs for MedicalDB and SPS using React and Next.js.',
                'Implemented data validation, record revision recovery, custom filtering and Excel export optimization.',
                'Improved scheduling features and introduced form grouping and required data alerts.',
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

export default MedicalDB;
