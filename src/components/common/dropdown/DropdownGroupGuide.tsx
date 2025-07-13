import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Dropdown from '@/components/common/Dropdown';
import Typography from '@/components/common/Typography';

const DropdownGroupGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Group</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Dropdown
              items={[
                {
                  type: 'group',
                  id: 'group-a',
                  label: 'Group A',
                  items: [
                    { type: 'item', id: 'item1', label: 'Item1' },
                    { type: 'item', id: 'item2', label: 'Item2' },
                    { type: 'item', id: 'item3', label: 'Item3' },
                  ],
                },
                {
                  type: 'group',
                  id: 'group-b',
                  label: 'Group B',
                  items: [
                    { type: 'item', id: 'item4', label: 'Item4' },
                    { type: 'item', id: 'item5', label: 'Item5' },
                    { type: 'item', id: 'item6', label: 'Item6' },
                  ],
                },
              ]}
              buttonItem="Menu"
              dialogWidth={114}
              onChange={(val) => console.log('Selected:', val)}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default DropdownGroupGuide;
