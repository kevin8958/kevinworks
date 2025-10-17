import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Box from '@/design-system/components/Box';
import Checkbox from '../Checkbox';
import Typography from '@/design-system/foundation/Typography';

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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          Represents the interactive or visual condition of the checkbox, such as being disabled or
          displaying validation feedback. Use specific states to indicate availability or input
          errors clearly.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="center"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
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

export default CheckboxStateGuide;
