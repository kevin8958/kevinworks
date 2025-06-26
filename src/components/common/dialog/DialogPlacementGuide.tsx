import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Button from '@/components/common/Button';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';
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
      <Typography variant="h4">Placement</Typography>
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

export default DialogPlacementGuide;
