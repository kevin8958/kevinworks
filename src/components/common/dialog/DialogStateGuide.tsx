import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import { useDialog } from '@/hooks/useDialog';

const DialogStateGuide = () => {
  const stateOptions: {
    id: Common.DialogState;
    value: string;
  }[] = [
    { id: 'info', value: 'Info' },
    { id: 'success', value: 'Success' },
    { id: 'warning', value: 'Warning' },
    { id: 'danger', value: 'Danger' },
  ];
  const { openDialog } = useDialog();

  const handleClick = async (state: Common.DialogState) => {
    const confirmed = await openDialog({
      title: 'Dialog Title',
      message: 'this is a message',
      state,
    });

    if (confirmed) {
      alert('Confirmed!');
    }
  };

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {stateOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
                <Button
                  classes="min-w-[80px]"
                  color={option.id === 'default' ? 'primary' : option.id}
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

export default DialogStateGuide;
