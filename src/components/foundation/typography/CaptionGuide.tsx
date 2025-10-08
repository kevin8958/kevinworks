import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const CaptionGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [{ id: 'C1', value: 'C1 (12px)' }];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Caption</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {variantOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3 w-[100px]" direction="col" items="center">
                <Typography variant={option.id} classes="mb-0">
                  Caption
                </Typography>
                <Typography variant="C1" color="secondary">
                  {option.value}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default CaptionGuide;
