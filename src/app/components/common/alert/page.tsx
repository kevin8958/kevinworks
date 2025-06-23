'use client';

import AlertVriantGuide from '@/components/common/alert/AlertVriantGuide';
import AlertStateGuide from '@/components/common/alert/AlertStateGuide';
import AlertCloseGuide from '@/components/common/alert/AlertCloseGuide';
import AlertIconGuide from '@/components/common/alert/AlertIconGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentAlertPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Alert
          </Typography>
          <AlertVriantGuide />
          <AlertStateGuide />
          <AlertCloseGuide />
          <AlertIconGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
