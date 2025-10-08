import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Typography from '@/components/foundation/Typography';

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
      <Typography variant="H3">Variant</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {variantOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Button classes="min-w-[80px]" variant={option.id}>
                  Button
                </Button>
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

export default ButtonVariantGuide;
