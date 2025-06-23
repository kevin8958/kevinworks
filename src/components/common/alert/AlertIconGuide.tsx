import React from 'react';
import { LuAlarmClock } from 'react-icons/lu';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '../Box';
import Typography from '../Typography';

const AlertIconGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Icon
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <FlexWrapper items="end">
            <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
              <Alert
                variant="contain"
                state="danger"
                title="Alert"
                message="this is message"
                hideIcon
              />
              <Typography variant="caption" color="secondary">
                hide icon
              </Typography>
            </FlexWrapper>
            <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
              <Alert
                variant="contain"
                state="danger"
                title="Alert"
                message="this is message"
                icon={<LuAlarmClock className="text-lg" />}
              />
              <Typography variant="caption" color="secondary">
                custom icon
              </Typography>
            </FlexWrapper>
            <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
              <Alert
                variant="contain"
                state="danger"
                title="Alert"
                message="this is message"
                loading
              />
              <Typography variant="caption" color="secondary">
                loading icon
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};

export default AlertIconGuide;
