import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';

const ButtonStateGuide = () => {
  const statusOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'disabled', value: 'Disabled' },
    { id: 'loading', value: 'Loading' },
    { id: 'prompted', value: 'Prompted' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          Represents the interactive state of the button. Use disabled to prevent interaction,
          loading to indicate progress, and prompt to draw temporary attention or highlight a key
          action.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {statusOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                disabled={option.id === 'disabled'}
                loading={option.id === 'loading'}
                prompted={option.id === 'prompted'}
                classes="min-w-[80px]"
              >
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

export default ButtonStateGuide;
