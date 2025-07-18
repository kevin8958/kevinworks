import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';

const ButtonStateGuide = () => {
  const statusOptions: {
    id: string;
    value: string;
  }[] = [
    { id: 'disabled', value: 'Disabled' },
    { id: 'loading', value: 'Loading' },
    { id: 'prompted', value: 'Prompted' },
    { id: 'icon-left', value: 'Icon Left' },
    { id: 'icon-right', value: 'Icon Right' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">State</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {statusOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="!gap-3" direction="col" items="center">
                <Button
                  disabled={option.id === 'disabled'}
                  loading={option.id === 'loading'}
                  prompted={option.id === 'prompted'}
                  icon={
                    (option.id === 'icon-left' || option.id === 'icon-right') && <HiOutlineHeart />
                  }
                  iconPosition={option.id === 'icon-left' ? 'left' : 'right'}
                  classes="min-w-[80px]"
                >
                  Button
                </Button>
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

export default ButtonStateGuide;
