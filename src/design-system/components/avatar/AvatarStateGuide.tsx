import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Avatar from '@/design-system/components/Avatar';
import Box from '@/design-system/components/Box';
import Typography from '@/design-system/foundation/Typography';

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
      <Typography variant="H3">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {stateOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Avatar size="md" type="image" state={option.id} />
                <Typography variant="C1" color="secondary">
                  {option.id}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
          <FlexWrapper classes="!gap-3" direction="col" items="center">
            <Avatar size="md" type="image" disabled state="active" />
            <Typography variant="C1" color="secondary">
              disabled
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarStateGuide;
