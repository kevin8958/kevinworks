import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Dropdown from '@/components/common/Dropdown';
import Typography from '@/components/foundation/Typography';

const DropdownSubMenuGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Sub menu</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Dropdown
              items={[
                { type: 'item', id: 'item1', label: 'item1' },
                {
                  type: 'submenu',
                  id: 'submenu1',
                  label: 'Sub Menu 1',
                  items: [
                    { type: 'item', id: 'subitem1', label: 'Sub Item 1' },
                    { type: 'item', id: 'subitem2', label: 'Sub Item 2' },
                    { type: 'item', id: 'subitem3', label: 'Sub Item 3' },
                  ],
                },
              ]}
              buttonItem="Menu"
              onChange={(val) => console.log('Selected:', val)}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default DropdownSubMenuGuide;
