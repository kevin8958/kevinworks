import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '../Box';
import Typography from '../Typography';

const AlertVriantGuide = () => {
  const typeOptions: {
    id: Common.AlertVariant;
    value: string;
  }[] = [
    { id: 'contain', value: 'Contain' },
    { id: 'outline', value: 'Outline' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Variant
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
          <FlexWrapper items="end">
            {typeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
                  <Alert
                    variant={option.id}
                    state="danger"
                    title="Alert"
                    message="this is message"
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

export default AlertVriantGuide;
