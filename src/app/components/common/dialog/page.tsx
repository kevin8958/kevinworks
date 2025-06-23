'use client';

import DialogPlacementGuide from '@/components/common/dialog/DialogPlacementGuide';
import DialogStateGuide from '@/components/common/dialog/DialogStateGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentDialogPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Dialog
          </Typography>
          <DialogPlacementGuide />
          <DialogStateGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
