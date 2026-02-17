import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Box from '@/design-system/components/Box';
import Checkbox from '../Checkbox';
import Typography from '@/design-system/foundation/Typography';

const CheckboxSizeGuide = () => {
  const [isChecked, setIsChecked] = React.useState<{
    [key in Common.ButtonSize]: boolean;
  }>({
    lg: false,
    md: false,
    sm: false,
  });

  const sizeOptions: {
    id: Common.ButtonSize;
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Size</Typography>
        <Typography variant="B1">
          Defines the overall size of the checkbox, including the checkmark and label spacing. Use
          different sizes to maintain visual balance and consistency across layouts.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="center"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {sizeOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Checkbox
                id={`${option.value}-checkbox-example`}
                checked={isChecked[option.id]}
                size={option.id}
                onChange={() =>
                  setIsChecked((prev) => ({
                    ...prev,
                    [option.id]: !prev[option.id],
                  }))
                }
                label="Check me"
              />
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

export default CheckboxSizeGuide;
