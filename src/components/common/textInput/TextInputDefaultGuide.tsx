import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import TextInput from '@/components/common/TextInput';
import Typography from '@/components/common/Typography';

const TextInputDefaultGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Default</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <TextInput
              label="Label"
              placeholder="Placeholder"
              id="text-input-default"
              classes="w-full max-w-[400px]"
              type="text"
              max={100}
              autoFocus={false}
              onFocus={() => console.log('Input focused')}
              onBlur={() => console.log('Input blurred')}
              onKeyUp={(e) => console.log('Key pressed:', e.key)}
              inputProps={{ 'aria-label': 'Default Text Input' }}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default TextInputDefaultGuide;
