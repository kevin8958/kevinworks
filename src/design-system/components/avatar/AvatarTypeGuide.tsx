import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Avatar from '@/design-system/components/Avatar';
import Box from '@/design-system/components/Box';
import Typography from '@/design-system/foundation/Typography';

const AvatarTypeGuide = () => {
  const typeOptions: {
    id: Common.AvatarType;
    value: string;
  }[] = [
    { id: 'image', value: 'Image' },
    { id: 'text', value: 'Text' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Type</Typography>
        <Typography variant="B1">
          Determines how the avatar's visual content is rendered. When set to text, the avatar
          displays the first letter of the user's name in uppercase, providing a simple, name-based
          fallback for user identification.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {typeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Avatar size="md" type={option.id} name="A" />
              <Typography variant="C1" color="primary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarTypeGuide;
