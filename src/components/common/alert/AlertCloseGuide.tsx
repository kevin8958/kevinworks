import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Typography from '@/components/common/Typography';

const AlertCloseGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Close</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Alert
              variant="contain"
              state="danger"
              title="Alert"
              message="this is a message"
              showClose
            />
            <Typography variant="caption" color="secondary">
              showClose
            </Typography>
          </FlexWrapper>
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Alert
              variant="contain"
              state="danger"
              title="Alert"
              message="this is a message"
              time={5}
              repeat
            />
            <Typography variant="caption" color="secondary">
              timer
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AlertCloseGuide;
