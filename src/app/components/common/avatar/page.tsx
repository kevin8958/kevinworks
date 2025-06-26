'use client';

import AvatarSizeGuide from '@/components/common/avatar/AvatarSizeGuide';
import AvatarStateGuide from '@/components/common/avatar/AvatarStateGuide';
import AvatarTypeGuide from '@/components/common/avatar/AvatarTypeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentAvatarPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Avatar
          </Typography>
          <AvatarSizeGuide />
          <AvatarTypeGuide />
          <AvatarStateGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="h4">Props</Typography>
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
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        classes
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the avatar.',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        size
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['lg', 'md', 'sm'].map((size) => (
          <span key={size} className="bg-primary-800 rounded-md px-2 py-1">
            {size}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the avatar.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        type
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['image', 'text'].map((type) => (
          <span key={type} className="bg-primary-800 rounded-md px-2 py-1">
            {type}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'image',
    description: 'The type of the avatar.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        state
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['none', 'active', 'semiActive', 'inactive'].map((state) => (
          <span key={state} className="bg-primary-800 rounded-md px-2 py-1">
            {state}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'none',
    description: 'The state of the avatar.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        disabled
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the avatar is disabled.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        profileImageUrl
      </span>
    ),
    type: 'string',
    default: '',
    description: 'The URL of the profile image.',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        name
      </span>
    ),
    type: 'string',
    default: '',
    description: 'The name to display in the avatar.',
  },
];
