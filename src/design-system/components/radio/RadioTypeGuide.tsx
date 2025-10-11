import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';
import Radio from '@/design-system/components/Radio';

const RadioTypeGuide = () => {
  const [selectedDefault, setSelectedDefault] = useState('basic');
  const [selectedDescription, setSelectedDescription] = useState('basic');
  const typeOptions = [
    {
      id: 'default',
      value: 'Default',
      options: [
        {
          id: 'basic',
          label: 'Basic Plan',
        },
        {
          id: 'pro',
          label: 'Pro Plan',
        },
        {
          id: 'enterprise',
          label: 'Enterprise Plan',
        },
      ],
    },
    {
      id: 'description',
      value: 'Description',
      options: [
        {
          id: 'basic',
          label: 'Basic Plan',
          desc: 'For individuals just getting started.',
        },
        {
          id: 'pro',
          label: 'Pro Plan',
          desc: 'For professionals who need advanced tools.',
        },
        {
          id: 'enterprise',
          label: 'Enterprise Plan',
          desc: 'For large teams and organizations with custom needs.',
        },
      ],
    },
  ];

  return (
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Type</Typography>
      <FlexWrapper classes="size-full" items="center">
        <FlexWrapper items="end">
          <FlexWrapper classes="w-full !gap-6 md:flex-row" direction="col" items="start">
            {typeOptions.map((option) => (
              <div key={option.id} className="w-full">
                <FlexWrapper classes="!gap-3" direction="col" items="center">
                  <Radio
                    title="Title"
                    options={option.options}
                    value={option.id === 'default' ? selectedDefault : selectedDescription}
                    onChange={option.id === 'default' ? setSelectedDefault : setSelectedDescription}
                  />
                  <Typography classes="w-max" variant="C1" color="secondary">
                    {option.id}
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

export default RadioTypeGuide;
