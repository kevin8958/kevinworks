'use client';

import AvatarSizeGuide from '@/components/common/avatar/AvatarSizeGuide';
import AvatarStateGuide from '@/components/common/avatar/AvatarStateGuide';
import AvatarTypeGuide from '@/components/common/avatar/AvatarTypeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
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
      <Badge color="secondary" size="md">
        classes
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the avatar.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        size
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['lg', 'md', 'sm'].map((size) => (
          <Badge key={size} size="md">
            {size}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the avatar.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        type
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['image', 'text'].map((type) => (
          <Badge key={type} size="md">
            {type}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'image',
    description: 'The type of the avatar.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        state
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['none', 'active', 'semiActive', 'inactive'].map((state) => (
          <Badge key={state} size="md">
            {state}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'none',
    description: 'The state of the avatar.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        disabled
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the avatar is disabled.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        profileImageUrl
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'The URL of the profile image.',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        name
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'The name to display in the avatar.',
  },
];
