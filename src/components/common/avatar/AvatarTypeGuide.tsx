import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Avatar from '@/components/common/Avatar';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

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
      <Typography variant="h4">Type</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {typeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Avatar size="md" type={option.id} name="A" />
                <Typography variant="caption" color="secondary">
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
