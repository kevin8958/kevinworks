import React from 'react';
import { LuAlarmClock } from 'react-icons/lu';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

const AlertIconGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Icon</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Alert
              variant="contain"
              state="danger"
              title="Alert"
              message="this is a message"
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
              message="this is a message"
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
              message="this is a message"
              loading
            />
            <Typography variant="caption" color="secondary">
              loading icon
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AlertIconGuide;
