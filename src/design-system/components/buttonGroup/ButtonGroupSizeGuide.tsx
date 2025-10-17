import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import ButtonGroup from '@/design-system/components/ButtonGroup';
import Typography from '@/design-system/foundation/Typography';

const ButtonGroupSizeGuide = () => {
  const [selectedOption, setSelectedOption] = useState<Common.ButtonGroupOption>({
    id: 'option1',
    value: 'Option 1',
  });

  const buttonGroupOptions = [
    { id: 'option1', value: 'Option 1' },
    { id: 'option2', value: 'Option 2' },
    { id: 'option3', value: 'Option 3' },
  ];

  const sizeOptions: {
    id: Common.ButtonSize;
    value: string;
  }[] = [
    { id: 'sm', value: 'Small' },
    { id: 'md', value: 'Medium' },
    { id: 'lg', value: 'Large' },
  ];

  const handleChangeOption = (option: Common.ButtonGroupOption) => {
    setSelectedOption(option);
  };

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Size</Typography>
        <Typography variant="B1">
          Defines the overall size of the buttonGroup, affecting both text and spacing. Use
          different sizes to match the visual hierarchy across various interface elements.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="center"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {sizeOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <ButtonGroup
                size={option.id}
                value={selectedOption}
                options={buttonGroupOptions}
                onChange={handleChangeOption}
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

export default ButtonGroupSizeGuide;
