'use client';

import AvatarSizeGuide from '@/design-system/components/avatar/AvatarSizeGuide';
import AvatarStateGuide from '@/design-system/components/avatar/AvatarStateGuide';
import AvatarTypeGuide from '@/design-system/components/avatar/AvatarTypeGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import AvatarStackGuide from '@/design-system/components/avatar/AvatarStackGuide';

export default function ComponentAvatarPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Avatar', href: '/design-system/components/avatar' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="primary">
            Avatar
          </Typography>
          <AvatarSizeGuide />
          <AvatarTypeGuide />
          <AvatarStackGuide />
          <AvatarStateGuide />
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
    description: 'Custom classes for the avatar.',
  },
  {
    id: '2',
    property: 'size',
    type: ['lg', 'md', 'sm'],
    default: 'md',
    description: 'The size of the avatar.',
  },
  {
    id: '3',
    property: 'type',
    type: ['image', 'text'],
    default: 'image',
    description: 'The type of the avatar.',
  },
  {
    id: '4',
    property: 'state',
    type: ['none', 'active', 'semiActive', 'inactive'],
    default: 'none',
    description: 'The state of the avatar.',
  },
  {
    id: '5',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the avatar is disabled.',
  },
  {
    id: '6',
    property: 'profileImageUrl',
    type: 'string',
    default: '',
    description: 'The URL of the profile image.',
  },
  {
    id: '7',
    property: 'name',
    type: 'string',
    default: '',
    description: 'The name to display in the avatar.',
  },
];
