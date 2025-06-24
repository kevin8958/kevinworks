import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '@/components/common/Box';
import Checkbox from '../Checkbox';
import Typography from '@/components/common/Typography';

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
    { id: 'lg', value: 'Large' },
    { id: 'md', value: 'Medium' },
    { id: 'sm', value: 'Small' },
  ];

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

export default CheckboxSizeGuide;
