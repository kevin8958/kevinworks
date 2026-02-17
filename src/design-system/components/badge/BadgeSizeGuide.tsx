import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Badge from '@/design-system/components/Badge';
import Typography from '@/design-system/foundation/Typography';

const BadgeSizeGuide = () => {
  const sizeOptions: {
    id: Common.BadgeSize;
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
          Defines the overall size of the badge, affecting both text and spacing. Use different
          sizes to match the visual hierarchy across various interface elements.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {sizeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Badge size={option.id} color="primary">
                Badge
              </Badge>
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

export default BadgeSizeGuide;
