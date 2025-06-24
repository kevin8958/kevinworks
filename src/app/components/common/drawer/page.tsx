'use client';

import DrawerDefaultGuide from '@/components/common/drawer/DrawerDefaultGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentDrawerPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Drawer
          </Typography>
          <DrawerDefaultGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
