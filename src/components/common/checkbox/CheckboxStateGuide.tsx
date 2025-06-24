import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '@/components/common/Box';
import Checkbox from '../Checkbox';
import Typography from '@/components/common/Typography';

const CheckboxStateGuide = () => {
  const [isChecked, setIsChecked] = React.useState<{
    [key in string]: boolean;
  }>({
    'disabled-checked': true,
    'disabled-unchecked': false,
    invalid: false,
  });

  const stateOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'disabled-checked', value: 'Disabled' },
    { id: 'disabled-unchecked', value: 'Disabled' },
    { id: 'invalid', value: 'Invalid' },
  ];

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        State
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <FlexWrapper items="end">
            {stateOptions.map((option) => (
              <div key={option.id}>
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Checkbox
                    id={`${option.value}-checkbox-example`}
                    checked={isChecked[option.id]}
                    disabled={option.value === 'Disabled'}
                    invalid={option.id === 'invalid' && !isChecked[option.id]}
                    size="md"
                    onChange={() =>
                      setIsChecked((prev) => ({
                        ...prev,
                        [option.id]: !prev[option.id],
                      }))
                    }
                    label="Check me"
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

export default CheckboxStateGuide;
