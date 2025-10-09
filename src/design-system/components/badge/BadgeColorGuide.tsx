import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Badge from '@/design-system/components/Badge';
import Typography from '@/design-system/foundation/Typography';

const BadgeColorGuide = () => {
  const colorOptions: {
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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {colorOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Badge color={option.id} size="md">
                  Badge
                </Badge>
                <Typography variant="C1" color="secondary">
                  {option.id}
                </Typography>
              </FlexWrapper>
            </div>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default BadgeColorGuide;
