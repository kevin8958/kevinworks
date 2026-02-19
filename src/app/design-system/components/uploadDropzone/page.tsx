'use client';

import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import UploadVariantGuide from '@/design-system/components/uploadDropzone/UploadVariantGuide';
import { propsColumn } from '@/constants/common';

const propsData = [
  {
    id: '1',
    property: 'onSelect',
    type: '(files: File[]) => void',
    default: '-',
    description: 'Callback function triggered when files are selected or dropped.',
  },
  {
    id: '2',
    property: 'accept',
    type: 'string',
    default: "'*'",
    description: 'HTML file input accept attribute (e.g., "image/*", ".pdf").',
  },
  {
    id: '3',
    property: 'maxSizeMB',
    type: 'number',
    default: '10',
    description: 'Maximum allowed size per file in Megabytes.',
  },
];

export default function ComponentUploadPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Upload Dropzone', href: '/design-system/components/uploadDropzone' },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start" gap={12}>
      <BreadCrumb items={breadcrumbItems} />

      <header className="w-full space-y-4">
        <Typography variant="H1" color="primary">
          Upload Dropzone
        </Typography>
        <Typography variant="B1" classes="max-w-3xl">
          A file upload area that supports drag-and-drop and manual selection. It includes visual
          states for dragging and built-in validation for better user experience.
        </Typography>
      </header>

      <UploadVariantGuide />

      <FlexWrapper classes="w-full" items="start" direction="col" gap={4}>
        <Typography variant="H3">Properties</Typography>
        <SimpleTable columns={propsColumn} data={propsData} />
      </FlexWrapper>
    </FlexWrapper>
  );
}
