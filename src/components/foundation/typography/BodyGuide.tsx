import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const BodyGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [
    { id: 'B1', value: 'B1 (16px)' },
    { id: 'B2', value: 'B2 (14px)' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Body</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {variantOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3 w-[100px]" direction="col" items="center">
                <Typography variant={option.id} classes="mb-0">
                  Body
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

export default BodyGuide;
