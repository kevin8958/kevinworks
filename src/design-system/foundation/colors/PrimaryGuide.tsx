import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const PrimaryGuide = () => {
  const primaryColors = {
    50: 'bg-primary-50',
    100: 'bg-primary-100',
    200: 'bg-primary-200',
    300: 'bg-primary-300',
    400: 'bg-primary-400',
    500: 'bg-primary-500',
    600: 'bg-primary-600',
    700: 'bg-primary-700',
    800: 'bg-primary-800',
    900: 'bg-primary-900',
    990: 'bg-primary-990',
  };
  return (
    <FlexWrapper classes="size-full" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Primary</Typography>
        <Typography variant="B1">
          The primary color represents the brand's core identity. It's used for key interactive
          elements such as buttons, active states, links, and highlights.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">- Main brand color</Typography>
          <Typography variant="B1">- Primary buttons and links</Typography>
          <Typography variant="B1">- Active states and focus indicators</Typography>
          <Typography variant="B1">- Backgrounds for key sections</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        justify="start"
        classes="bg-primary-900 p-10 w-full rounded-xl"
        gap={0}
      >
        {Object.entries(primaryColors).map(([key, value]) => (
          <div key={key}>
            <FlexWrapper classes="!gap-3" items="center" direction="col">
              <span className={`size-10 ${value}`} />
              <Typography variant="C1" color="secondary">
                {key}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default PrimaryGuide;
