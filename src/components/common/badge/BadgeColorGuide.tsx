import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Badge from '@/components/common/Badge';
import Typography from '@/components/common/Typography';

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
      <Typography variant="h4">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {colorOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Badge color={option.id} size="md">
                  Badge
                </Badge>
                <Typography variant="caption" color="secondary">
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
