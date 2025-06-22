import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '../Box';
import Button from '../Button';
import Typography from '../Typography';

const ButtonVariantGuide = () => {
  const variantOptions: {
    id: Common.ButtonVariant;
    value: string;
  }[] = [
    { id: 'contain', value: 'contain' },
    { id: 'outline', value: 'outline' },
    { id: 'clear', value: 'Clear' },
  ];

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Variant
      </Typography>
      <Box id="button-variant-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <FlexWrapper items="end">
            {variantOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Button
                    id={`${option.value}-button-example`}
                    classes="min-w-[80px]"
                    variant={option.id}
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

export default ButtonVariantGuide;
