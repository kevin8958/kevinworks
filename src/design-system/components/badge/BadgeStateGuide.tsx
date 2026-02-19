import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Badge from '@/design-system/components/Badge';
import Typography from '@/design-system/foundation/Typography';

const BadgeStateGuide = () => {
  const stateOptions: {
    id: Common.BadgeColor;
    value: string;
  }[] = [
    { id: 'primary', value: 'Primary' },
    { id: 'secondary', value: 'Secondary' },
    { id: 'success', value: 'Success' },
    { id: 'warning', value: 'Warning' },
    { id: 'danger', value: 'Danger' },
  ];

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">State</Typography>
        <Typography variant="B1">
          Defines the visual tone of the badge, indicating contextual meaning such as success,
          warning, or danger. Use different states to represent various statuses or message types.
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
              <Badge color={option.id} size="md">
                Badge
              </Badge>
              <Typography variant="C1" color="primary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default BadgeStateGuide;
