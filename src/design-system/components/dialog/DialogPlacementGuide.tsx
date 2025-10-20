import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';
import { useDialog } from '@/hooks/useDialog';

const DialogPlacementGuide = () => {
  const placementOptions: {
    id: Common.DialogPlacement;
    value: string;
  }[] = [
    { id: 'top', value: 'Top' },
    { id: 'center', value: 'Center' },
    { id: 'bottom', value: 'Bottom' },
  ];
  const { openDialog } = useDialog();

  const handleClick = async (placement: Common.DialogPlacement) => {
    const confirmed = await openDialog({
      title: 'Dialog Title',
      message: 'this is a message',
      placement,
    });

    if (confirmed) {
      alert('Confirmed!');
    }
  };
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Placement</Typography>
        <Typography variant="B1">
          Placement determines where the dialog appears on the screen—top, center, or bottom—helping
          control focus and visual hierarchy within the interface.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {placementOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
              <Button
                classes="min-w-[80px]"
                variant="contain"
                onClick={() => handleClick(option.id)}
              >
                Dialog
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

export default DialogPlacementGuide;
