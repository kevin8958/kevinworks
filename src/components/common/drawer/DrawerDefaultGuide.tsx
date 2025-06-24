import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Button from '@/components/common/Button';
import Drawer from '@/components/common/Drawer';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

const DrawerDefaultGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4" color="secondary">
        Default
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
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
      </Box>
    </FlexWrapper>
  );
};

export default DrawerDefaultGuide;
