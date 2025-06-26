import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import SplitText from '@/components/interaction/SplitText';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

const SplitTextDefaultGuide = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Default
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <SplitText
            text="Split Text"
            className="text-center text-[60px] font-semibold text-white"
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
      </Box>
    </FlexWrapper>
  );
};

export default SplitTextDefaultGuide;
