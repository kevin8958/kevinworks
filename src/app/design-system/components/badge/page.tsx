'use client';

import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import { propsColumn } from '@/constants/common';
import BadgeSizeGuide from '@/design-system/components/badge/BadgeSizeGuide';
import BadgeStateGuide from '@/design-system/components/badge/BadgeStateGuide';
import Badge from '@/design-system/components/Badge';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import BadgeIconGuide from '@/design-system/components/badge/BadgeIconGuide';

export default function ComponentBadgePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Badge', href: '/design-system/components/badge' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Badge
          </Typography>
          <BadgeSizeGuide />
          <BadgeStateGuide />
          <BadgeIconGuide />
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
    property: 'children',
    type: ['string', 'React.ReactNode'],
    default: '',
    description: 'The content of the badge.',
  },
  {
    id: '2',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Defines the overall size of the badge, affecting both text and spacing.',
  },
  {
    id: '3',
    property: 'color',
    type: ['primary', 'secondary', 'success', 'warning', 'danger'],
    default: 'primary',
    description: 'Defines the color theme of the badge.',
  },
  {
    id: '4',
    property: 'icon',
    type: 'React.ReactNode',
    default: '',
    description: 'Optional icon to display alongside the badge content.',
  },
  {
    id: '5',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the badge will appear in a disabled state.',
  },
  {
    id: '6',
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes for the badge.',
  },
];
