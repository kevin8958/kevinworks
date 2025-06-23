'use client';

import AvatarSizeGuide from '@/components/common/avatar/AvatarSizeGuide';
import AvatarStateGuide from '@/components/common/avatar/AvatarStateGuide';
import AvatarTypeGuide from '@/components/common/avatar/AvatarTypeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentAvatarPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Avatar
          </Typography>
          <AvatarSizeGuide />
          <AvatarTypeGuide />
          <AvatarStateGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
