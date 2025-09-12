import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import ButtonGroup from '@/components/common/ButtonGroup';
import Typography from '@/components/common/Typography';

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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {sizeOptions.map((option) => (
            <div key={option.id}>
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <ButtonGroup
                  size={option.id}
                  value={selectedOption}
                  options={buttonGroupOptions}
                  onChange={handleChangeOption}
                />
                <Typography variant="caption" color="secondary">
                  {option.id}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonGroupSizeGuide;
