import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import SplitText from '@/components/interaction/SplitText';
import Typography from '@/components/common/Typography';

const SplitTextDefaultGuide = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Default</Typography>
      <FlexWrapper classes="size-full" items="center">
        <SplitText
          text="Split Text"
          classes="text-center text-[60px] font-semibold text-white"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default SplitTextDefaultGuide;
