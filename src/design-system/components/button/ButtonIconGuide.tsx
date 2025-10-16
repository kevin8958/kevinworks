import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';

const ButtonIconGuide = () => {
  const iconOptions: {
    id: Common.ButtonIconPosition;
    value: string;
  }[] = [
    { id: 'left', value: 'Left Icon' },
    { id: 'right', value: 'Right Icon' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Icon</Typography>
        <Typography variant="B1">
          Defines the icon placement within the button. Use icon-left or icon-right to display icons
          beside the label, or hide to render the button without an icon.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {iconOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                icon={<HiOutlineHeart className="text-lg" />}
                iconPosition={option.id}
                classes="min-w-[80px]"
              >
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
  );
};

export default ButtonIconGuide;
