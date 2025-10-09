import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Button from '@/design-system/components/Button';
import Drawer from '@/design-system/components/Drawer';
import Box from '@/design-system/components/Box';
import Typography from '@/design-system/foundation/Typography';

const DrawerDefaultGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Default</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
            <Button classes="min-w-[80px]" variant="contain" onClick={() => setIsOpen(true)}>
              Drawer
            </Button>
            <Drawer
              open={isOpen}
              title="Drawer title"
              showFooter
              onClose={() => setIsOpen(false)}
              onCancel={() => setIsOpen(false)}
              onConfirm={() => alert('confirm')}
            >
              <div className="p-4 text-white">
                <p>Content</p>
              </div>
            </Drawer>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default DrawerDefaultGuide;
