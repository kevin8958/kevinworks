'use client';

import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import RadioTypeGuide from '@/design-system/components/radio/RadioTypeGuide';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentRadioPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Radio', href: '/design-system/components/radio' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Radio
          </Typography>
          <RadioTypeGuide />
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
    property: 'title',
    type: 'string',
    default: "''",
    description: 'Optional title displayed above the radio group.',
  },
  {
    id: '2',
    property: 'options',
    type: ['Array', '{ id: string; label: string; desc?: string }[]'],
    default: '[]',
    description: 'Array of radio options with label and optional description.',
  },
  {
    id: '3',
    property: 'value',
    type: 'string',
    default: "''",
    description: 'Currently selected option ID.',
  },
  {
    id: '4',
    property: 'onChange',
    type: '(id: string) => void',
    default: '—',
    description: 'Callback fired when a radio option is selected.',
  },
];
