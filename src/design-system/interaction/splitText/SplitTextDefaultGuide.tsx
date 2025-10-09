import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import SplitText from '@/design-system/interaction/SplitText';
import Typography from '@/design-system/foundation/Typography';

const SplitTextDefaultGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Default</Typography>
      <FlexWrapper classes="size-full" items="center">
        <SplitText variant="h2" text="Split Text" delay={100} repeat />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SplitTextDefaultGuide;
