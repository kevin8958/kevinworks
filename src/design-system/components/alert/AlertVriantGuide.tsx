import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Alert from '../Alert';
import Typography from '@/design-system/foundation/Typography';

const AlertVriantGuide = () => {
  const typeOptions: {
    id: Common.AlertVariant;
    value: string;
  }[] = [
    { id: 'contain', value: 'Contain' },
    { id: 'outline', value: 'Outline' },
  ];
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Variant</Typography>
        <Typography variant="B1">
          The variant prop defines the visual appearance of the Alert.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {typeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="w-full !gap-3" direction="col" items="center">
              <Alert classes="!w-full" variant={option.id} state="danger" title="Alert" />
              <Typography variant="C1" color="secondary">
                {option.id}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AlertVriantGuide;
