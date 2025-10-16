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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Size</Typography>
        <Typography variant="B1">
          Adds an icon to the badge to visually represent its meaning or status. Icons can be placed
          before the text to enhance recognition and context.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {sizeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Avatar size={option.id} name="A" />
              <Typography variant="C1" color="secondary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarSizeGuide;
