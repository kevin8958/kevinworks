import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Typography from '@/components/foundation/Typography';

const HeadingGuide = () => {
  const variantOptions: {
    id: Foundation.TypographyVariant;
    value: string;
  }[] = [
    { id: 'H1', value: 'H1 (64px)' },
    { id: 'H2', value: 'H2 (40px)' },
    { id: 'H3', value: 'H3 (24px)' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Heading</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {variantOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Typography variant={option.id} classes="mb-0">
                  Heading
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

export default HeadingGuide;
