import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '../Box';
import ButtonGroup from '@/components/common/ButtonGroup';
import Typography from '../Typography';

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
    { id: 'lg', value: 'Large' },
    { id: 'md', value: 'Medium' },
    { id: 'sm', value: 'Small' },
  ];

  const handleChangeOption = (option: Common.ButtonGroupOption) => {
    setSelectedOption(option);
  };

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Size
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
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
      </Box>
    </FlexWrapper>
  );
};

export default ButtonGroupSizeGuide;
