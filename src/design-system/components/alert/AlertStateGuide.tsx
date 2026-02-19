import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Alert from '../Alert';
import Typography from '@/design-system/foundation/Typography';

const AlertStateGuide = () => {
  const stateOptions: {
    id: Common.AlertState;
    value: string;
  }[] = [
    { id: 'info', value: 'Info' },
    { id: 'success', value: 'Success' },
    { id: 'warning', value: 'Warning' },
    { id: 'danger', value: 'Danger' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          The state prop defines the tone and meaning of the alert. Each state automatically applies
          the appropriate color and icon.
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
              <Alert classes="!w-full" variant="contain" state={option.id} title="Alert" />
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

export default AlertStateGuide;
