'use client';

import Typography from '@/components/common/Typography';
import SplitTextDefaultGuide from '@/components/interaction/splitText/SplitTextDefaultGuide';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentSplitTextPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Split Text
          </Typography>
          <SplitTextDefaultGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
