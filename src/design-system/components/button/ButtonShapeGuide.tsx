import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Typography from '@/design-system/foundation/Typography';

const ButtonShapeGuide = () => {
  const shapeOptions: {
    id: Common.ButtonShape;
    value: string;
  }[] = [
    { id: 'rect', value: 'Rect' },
    { id: 'circle', value: 'Circle' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Shape</Typography>
        <Typography variant="B1">
          Controls the button's overall shape. Use rect for standard rectangular buttons or circle
          for perfectly round buttons, often used for icon-only actions.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {shapeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button shape={option.id}>
                <HiOutlineHeart className="text-lg" />
              </Button>
              <Typography variant="C1" color="secondary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonShapeGuide;
