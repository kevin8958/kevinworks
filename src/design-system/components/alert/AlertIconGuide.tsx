import React from 'react';
import { LuAlarmClock } from 'react-icons/lu';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '@/design-system/components/Box';
import Typography from '@/design-system/foundation/Typography';

const AlertIconGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Icon</Typography>
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
            <Typography variant="C1" color="secondary">
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
            <Typography variant="C1" color="secondary">
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
            <Typography variant="C1" color="secondary">
              loading icon
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AlertIconGuide;
