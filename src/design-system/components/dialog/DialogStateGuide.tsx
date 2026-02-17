import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';
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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          State defines the dialog's visual tone, using variants like info, success, warning, and
          danger to communicate context and importance.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
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

export default DialogStateGuide;
