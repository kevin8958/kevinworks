import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import dayjs from 'dayjs';
import Datepicker from '@/components/common/DatePicker';
import Typography from '@/components/common/Typography';

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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="h4">Variant</Typography>
      <FlexWrapper classes="size-full px-6" items="center">
        <FlexWrapper items="end">
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

export default DatepickerVariantGuide;
