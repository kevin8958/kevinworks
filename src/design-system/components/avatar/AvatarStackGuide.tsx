import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import AvatarStack from '@/design-system/components/AvatarStack';
import Typography from '@/design-system/foundation/Typography';

const AvatarStackGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Stack</Typography>
        <Typography variant="B1">
          Avatars can be grouped together to represent multiple users. When used in a stack, each
          avatar slightly overlaps the previous one with a consistent offset.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
          <AvatarStack
            users={[
              {
                name: 'Alice',
                profileImageUrl: '/sticker/alice.png',
                size: 'md',
              },
              { name: 'Bob', profileImageUrl: '/sticker/bob.png', size: 'md' },
              {
                name: 'Charlie',
                profileImageUrl: '/sticker/charlie.png',
                size: 'md',
              },
              { name: 'Dana', profileImageUrl: '/sticker/dana.png', size: 'md' },
            ]}
            size="md"
            overlap={-24}
            max={3}
          />
          <Typography variant="C1" color="secondary">
            stack
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AvatarStackGuide;
