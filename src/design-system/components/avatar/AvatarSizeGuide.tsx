import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Avatar from '@/design-system/components/Avatar';
import Typography from '@/design-system/foundation/Typography';

const AvatarSizeGuide = () => {
  const sizeOptions: {
    id: Common.ButtonSize;
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {sizeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Avatar size={option.id} />
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

export default AvatarSizeGuide;
