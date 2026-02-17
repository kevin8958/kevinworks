import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import dayjs from 'dayjs';
import Datepicker from '@/design-system/components/DatePicker';
import Typography from '@/design-system/foundation/Typography';

const variantOptions: {
  id: Common.DatepickerVariant;
  value: string;
}[] = [
  { id: 'contain', value: 'Contain' },
  { id: 'outline', value: 'Outline' },
  { id: 'clear', value: 'Clear' },
];

const DatepickerVariantGuide = () => {
  const [signleValue, setSignleValue] = useState<Date | null>(dayjs().toDate());
  const [rangeValue, setRangeValue] = useState<[Date | null, Date | null]>([
    dayjs().toDate(),
    dayjs().toDate(),
  ]);

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Variant</Typography>
        <Typography variant="B1">
          Variant defines the DatePicker's visual style: contain for a solid filled look, outline
          for a bordered and balanced appearance, and clear for a minimal, seamless design.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-neutral-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {variantOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Datepicker
                classes="w-[200px]"
                type="single"
                variant={option.id}
                value={signleValue}
                onChange={(value: Date | null) => {
                  setSignleValue(value);
                }}
              />
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

export default DatepickerVariantGuide;
