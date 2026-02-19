import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Progress from '@/design-system/components/Progress';
import Typography from '@/design-system/foundation/Typography';

const ProgressSizeGuide = () => {
  const sizeOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-6 sm:flex-row" direction="col" items="center">
            {sizeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Progress
                    value={70}
                    width={200}
                    size={option.id as Common.ProgressSize}
                    labelPosition="bottom" // top | bottom | inside
                  />
                  <Typography classes="w-max" variant="C1" color="primary">
                    {option.id}
                  </Typography>
                </FlexWrapper>
              </div>
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ProgressSizeGuide;
