import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {stateOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
                <Alert
                  variant="contain"
                  state={option.id}
                  title="Alert"
                  message="this is a message"
                />
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

export default AlertStateGuide;
