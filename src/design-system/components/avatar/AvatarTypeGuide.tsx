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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Type</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {typeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Avatar size="md" type={option.id} name="A" />
                <Typography variant="C1" color="secondary">
                  {option.id}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarTypeGuide;
