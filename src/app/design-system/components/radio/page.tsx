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
    property: (
      <Badge color="secondary" size="md">
        title
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string</Badge>
      </FlexWrapper>
    ),
    default: "''",
    description: 'Optional title displayed above the radio group.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        options
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">Array</Badge>
        <Badge size="md">{'{ id: string; label: string; desc?: string }[]'}</Badge>
      </FlexWrapper>
    ),
    default: '[]',
    description: 'Array of radio options with label and optional description.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        value
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string</Badge>
      </FlexWrapper>
    ),
    default: "''",
    description: 'Currently selected option ID.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        onChange
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">(id: string) =&gt; void</Badge>
      </FlexWrapper>
    ),
    default: '—',
    description: 'Callback fired when a radio option is selected.',
  },
];
