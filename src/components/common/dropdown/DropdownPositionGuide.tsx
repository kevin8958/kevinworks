import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Dropdown from '@/components/common/Dropdown';
import Typography from '@/components/common/Typography';

const DropdownPositionGuide = () => {
  const positionOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'left', value: 'Left' },
    { id: 'right', value: 'Right' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Position</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-10" items="center">
            {positionOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Dropdown
                    items={[
                      { type: 'item', id: 'item1', label: 'item1' },
                      { type: 'item', id: 'item2', label: 'item2' },
                      { type: 'item', id: 'item3', label: 'item3' },
                      { type: 'item', id: 'item4', label: 'item4' },
                      { type: 'item', id: 'item5', label: 'item5' },
                    ]}
                    onChange={(val) => console.log('Selected:', val)}
                    dialogWidth={80}
                    dialogPosition={option.id as 'left' | 'right'}
                    buttonItem="Menu"
                  />
                  <Typography classes="w-max" variant="caption" color="secondary">
                    {option.value}
                  </Typography>
                </FlexWrapper>
              </div>
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default DropdownPositionGuide;
