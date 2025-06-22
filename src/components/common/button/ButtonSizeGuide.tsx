import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '../Box';
import Button from '../Button';
import Typography from '../Typography';

const ButtonSizeGuide = () => {
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
      <Typography variant="h4" color="secondary">
        Size
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <FlexWrapper items="end">
            {sizeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Button
                    id={`${option.value}-button-example`}
                    classes="min-w-[80px]"
                    size={option.id}
                  >
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
      </Box>
    </FlexWrapper>
  );
};

export default ButtonSizeGuide;
