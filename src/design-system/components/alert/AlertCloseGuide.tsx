import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Alert from '../Alert';
import Typography from '@/design-system/foundation/Typography';

const AlertCloseGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Close</Typography>
        <Typography variant="B1">The Alert can be dismissed manually or automatically.</Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
          <Alert
            classes="!w-full"
            variant="contain"
            state="danger"
            title="Alert"
            message="this is a message"
            showClose
          />
          <Typography variant="C1" color="secondary">
            showClose
          </Typography>
        </FlexWrapper>
        <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
          <Alert
            classes="!w-full"
            variant="contain"
            state="danger"
            title="Alert"
            message="this is a message"
            time={5}
            repeat
          />
          <Typography variant="C1" color="secondary">
            timer
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AlertCloseGuide;
