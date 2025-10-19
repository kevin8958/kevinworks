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
          Variant determines the DatePicker’s visual presentation. The contain variant provides a
          solid and filled style that draws attention to the input area. The outline variant uses a
          bordered but transparent background, offering a balanced and versatile look. The clear
          variant minimizes visual framing for a lightweight, seamless appearance that blends into
          surrounding UI elements.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
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
