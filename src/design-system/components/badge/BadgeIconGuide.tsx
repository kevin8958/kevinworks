import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Badge from '@/design-system/components/Badge';
import Typography from '@/design-system/foundation/Typography';

const BadgeIconGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Icon</Typography>
        <Typography variant="B1">
          Icons visually represent the alert's state and help users quickly recognize its meaning.
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
          <Badge color="primary" size="md">
            Badge
          </Badge>
          <Typography variant="C1" color="secondary">
            hide icon
          </Typography>
        </FlexWrapper>
        <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
          <Badge color="primary" size="md" icon={<HiBadgeCheck className="text-lg" />}>
            Badge
          </Badge>
          <Typography variant="C1" color="secondary">
            custom icon
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default BadgeIconGuide;
