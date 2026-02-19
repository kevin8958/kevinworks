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
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          Indicates the user's current status or presence, represented as a small colored dot on the
          bottom-right of the avatar.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {stateOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Avatar size="md" type="image" state={option.id} />
              <Typography variant="C1" color="primary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
        <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
          <Avatar size="md" type="image" disabled state="active" />
          <Typography variant="C1" color="primary">
            disabled
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarStateGuide;
