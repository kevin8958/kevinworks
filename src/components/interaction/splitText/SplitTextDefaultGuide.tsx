import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import SplitText from '@/components/interaction/SplitText';
import Typography from '@/components/common/Typography';

const SplitTextDefaultGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Default</Typography>
      <FlexWrapper classes="size-full" items="center">
        <SplitText variant="h2" text="Split Text" delay={100} repeat />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SplitTextDefaultGuide;
