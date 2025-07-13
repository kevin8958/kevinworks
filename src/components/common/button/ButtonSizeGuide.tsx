import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';

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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {sizeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Button classes="min-w-[80px]" size={option.id}>
                  Button
                </Button>
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

export default ButtonSizeGuide;
