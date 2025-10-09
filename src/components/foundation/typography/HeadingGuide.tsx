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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Heading</Typography>
        <Typography variant="B1">
          Headings provide visual hierarchy and guide users through the page structure. They draw
          the most attention and help users quickly understand content organization.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={10}
      >
        {variantOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" items="end">
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
  );
};

export default HeadingGuide;
