import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Progress from '@/components/common/Progress';
import Typography from '@/components/common/Typography';

const ProgressTypeGuide = () => {
  const typeOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'default', value: 'Default' },
    { id: 'circle', value: 'Circle' },
  ];

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Type</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-6" items="center">
            {typeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Progress
                    value={70}
                    width={200}
                    size="md"
                    labelPosition="bottom"
                    isCircle={option.id === 'circle'}
                  />
                  <Typography classes="w-max" variant="caption" color="secondary">
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

export default ProgressTypeGuide;
