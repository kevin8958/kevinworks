import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const GrayGuide = () => {
  const grayColors = {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    200: 'bg-gray-200',
    300: 'bg-gray-300',
    400: 'bg-gray-400',
    500: 'bg-gray-500',
    600: 'bg-gray-600',
    700: 'bg-gray-700',
    800: 'bg-gray-800',
    900: 'bg-gray-900',
  };
  return (
    <FlexWrapper classes="size-full" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Gray</Typography>
        <Typography variant="B1">
          The neutral palette provides the foundation for layout, typography, and UI structure. It's
          used for backgrounds, borders, and text colors, ensuring balance and readability.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1">- Background layers and surfaces</Typography>
          <Typography variant="B1">- Text and icon colors</Typography>
          <Typography variant="B1">- Divider lines and outlines</Typography>
          <Typography variant="B1">- Disabled states</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        justify="start"
        classes="bg-primary-900 p-4 md:p-10 w-full rounded-xl"
        gap={0}
      >
        {Object.entries(grayColors).map(([key, value]) => (
          <div key={key}>
            <FlexWrapper classes="!gap-3" items="center" direction="col">
              <span className={`size-6 md:size-10 ${value}`} />
              <Typography variant="C1" color="secondary" classes="hidden md:block">
                {key}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default GrayGuide;
