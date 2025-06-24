import React from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Alert from '../Alert';
import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';

const AlertVriantGuide = () => {
  const typeOptions: {
    id: Common.AlertVariant;
    value: string;
  }[] = [
    { id: 'contain', value: 'Contain' },
    { id: 'outline', value: 'Outline' },
  ];
  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Variant</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          {typeOptions.map((option) => (
            <div key={option.id} className="w-full">
              <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
                <Alert classes="!w-[200px]" variant={option.id} state="danger" title="Alert" />
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

export default AlertVriantGuide;
