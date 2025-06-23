import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '../Box';
import Typography from '../Typography';

const AlertCloseGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Close
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
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
      </Box>
    </FlexWrapper>
  );
};

export default AlertCloseGuide;
