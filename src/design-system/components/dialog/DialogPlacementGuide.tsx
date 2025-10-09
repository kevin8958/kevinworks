import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Box from '@/design-system/components/Box';
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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Placement</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
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
    </FlexWrapper>
  );
};

export default DialogPlacementGuide;
