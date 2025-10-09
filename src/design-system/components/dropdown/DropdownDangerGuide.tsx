import React, { useState } from 'react';
import { LuTrash2 } from 'react-icons/lu';
import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Dropdown from '@/design-system/components/Dropdown';
import Typography from '@/design-system/foundation/Typography';

const DropdownDangerGuide = () => {
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Danger</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Dropdown
              items={[
                { type: 'item', id: 'item1', label: 'item1' },
                { type: 'item', id: 'item2', label: 'item2' },
                { type: 'item', id: 'item3', label: 'item3' },
                { type: 'item', id: 'delete', label: 'Delete', icon: <LuTrash2 />, danger: true },
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

export default DropdownDangerGuide;
