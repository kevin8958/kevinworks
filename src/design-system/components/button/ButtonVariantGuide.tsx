import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Box from '@/design-system/components/Box';
import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';

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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Variant</Typography>
        <Typography variant="B1">
          Determines the button's visual style. Use contained for solid buttons that draw attention,
          outline for secondary actions, and clear for minimal or text-only buttons.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {variantOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button classes="min-w-[80px]" variant={option.id}>
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

export default ButtonVariantGuide;
