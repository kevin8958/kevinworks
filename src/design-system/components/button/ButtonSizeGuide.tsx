import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';

const ButtonSizeGuide = () => {
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
          Defines the overall size of the button, adjusting text size, padding, and icon scale for
          visual consistency across different interface elements.
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
              <Button classes="min-w-[80px]" size={option.id}>
                Button
              </Button>
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

export default ButtonSizeGuide;
