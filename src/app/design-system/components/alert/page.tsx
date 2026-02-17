'use client';

import AlertVriantGuide from '@/design-system/components/alert/AlertVriantGuide';
import AlertStateGuide from '@/design-system/components/alert/AlertStateGuide';
import AlertCloseGuide from '@/design-system/components/alert/AlertCloseGuide';
import AlertIconGuide from '@/design-system/components/alert/AlertIconGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentAlertPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Alert', href: '/design-system/components/alert' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-6" items="start" direction="col">
          <FlexWrapper classes="w-full" items="end" justify="between">
            <Typography variant="H1" color="secondary">
              Alert
            </Typography>
          </FlexWrapper>
          <AlertVriantGuide />
          <AlertStateGuide />
          <AlertCloseGuide />
          <AlertIconGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes for the alert.',
  },
  {
    id: '2',
    property: 'variant',
    type: ['contain', 'outline'],
    default: 'contain',
    description: 'The variant of the alert.',
  },
  {
    id: '3',
    property: 'state',
    type: ['info', 'success', 'warning', 'danger'],
    default: 'info',
    description: 'The state of the alert.',
  },
  {
    id: '4',
    property: 'title',
    type: 'string',
    default: '',
    description: 'The title of the alert.',
  },
  {
    id: '5',
    property: 'message',
    type: 'string',
    default: '',
    description: 'The message of the alert.',
  },
  {
    id: '6',
    property: 'showClose',
    type: 'boolean',
    default: 'false',
    description: 'Whether to show the close button.',
  },
  {
    id: '7',
    property: 'time',
    type: 'number',
    default: '',
    description: 'Time in seconds to auto-close the alert.',
  },
  {
    id: '8',
    property: 'repeat',
    type: 'boolean',
    default: 'false',
    description: 'Whether to repeat the alert.',
  },
  {
    id: '9',
    property: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Whether to show loading state.',
  },
  {
    id: '10',
    property: 'icon',
    type: 'ReactNode',
    default: '',
    description: 'Custom icon for the alert.',
  },
  {
    id: '11',
    property: 'hideIcon',
    type: 'boolean',
    default: 'false',
    description: 'Whether to hide the icon.',
  },
  {
    id: '12',
    property: 'onClose',
    type: '() => void',
    default: '',
    description: 'Callback function when the alert is closed.',
  },
];
