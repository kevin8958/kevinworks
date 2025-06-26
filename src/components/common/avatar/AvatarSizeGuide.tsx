import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Avatar from '@/components/common/Avatar';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

const AvatarSizeGuide = () => {
  const sizeOptions: {
    id: Common.ButtonSize;
    value: string;
  }[] = [
    { id: 'lg', value: 'Large' },
    { id: 'md', value: 'Medium' },
    { id: 'sm', value: 'Small' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {sizeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Avatar size={option.id} />
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

export default AvatarSizeGuide;
