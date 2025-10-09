import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Dropdown from '@/design-system/components/Dropdown';
import Typography from '@/design-system/foundation/Typography';

const DropdownSizeGuide = () => {
  const sizeOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'fit', value: 'Fit Content' },
    { id: 'fixed', value: 'Fixed Width' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Size</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-6" items="center">
            {sizeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Dropdown
                    items={[
                      { type: 'item', id: 'item1', label: 'item1' },
                      { type: 'item', id: 'item2', label: 'item2item2' },
                      { type: 'item', id: 'item3', label: 'item3item3item3' },
                      { type: 'item', id: 'item4', label: 'item4item4item4item4' },
                      { type: 'item', id: 'item5', label: 'item5item5item5item5item5' },
                    ]}
                    onChange={(val) => console.log('Selected:', val)}
                    dialogWidth={option.id === 'fixed' ? 80 : undefined}
                    buttonItem="Menu"
                    buttonClasses="w-[80px]"
                  />
                  <Typography classes="w-max" variant="C1" color="secondary">
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

export default DropdownSizeGuide;
