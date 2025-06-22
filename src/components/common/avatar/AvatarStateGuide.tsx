import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Avatar from '../Avatar';
import Box from '../Box';
import Typography from '../Typography';

const AvatarStateGuide = () => {
  const stateOptions: {
    id: Common.AvatarState;
    value: string;
  }[] = [
    { id: 'active', value: 'Active' },
    { id: 'semiActive', value: 'SemiActive' },
    { id: 'inactive', value: 'Inactive' },
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
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Avatar size="md" type="image" state={option.id} />
                  <Typography variant="caption" color="secondary">
                    {option.id}
                  </Typography>
                </FlexWrapper>
              </div>
            ))}
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Avatar size="md" type="image" disabled state="active" />
              <Typography variant="caption" color="secondary">
                disabled
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};

export default AvatarStateGuide;
