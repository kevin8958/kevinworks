import React, { useState } from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import dayjs from 'dayjs';
import Datepicker from '@/design-system/components/DatePicker';
import Typography from '@/design-system/foundation/Typography';

const typeOptions: {
  id: Common.DatepickerType;
  value: string;
}[] = [
  { id: 'single', value: 'Signle' },
  { id: 'range', value: 'Range' },
];

const DatepickerTypeGuide = () => {
  const [signleValue, setSignleValue] = useState<Date | null>(dayjs().toDate());
  const [rangeValue, setRangeValue] = useState<[Date | null, Date | null]>([
    dayjs().toDate(),
    dayjs().toDate(),
  ]);

  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Type</Typography>
        <Typography variant="B1">
          Type specifies the selection mode: single for choosing one date, and range for selecting a
          continuous date period.
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="bg-primary-900 p-6 w-full rounded-xl pb-10"
        gap={6}
      >
        {typeOptions.map((option) => (
          <div key={option.id} className="w-full">
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              {option.id === 'range' ? (
                <Datepicker
                  classes="w-[240px]"
                  type={option.id}
                  value={null}
                  isRange={option.id === 'range'}
                  startDate={rangeValue[0] || undefined}
                  endDate={rangeValue[1] || undefined}
                  onChange={(value: any) => {
                    setRangeValue(value as [Date | null, Date | null]);
                  }}
                />
              ) : (
                <Datepicker
                  classes="w-[200px]"
                  type={option.id}
                  value={signleValue}
                  onChange={(value: Date | null) => {
                    setSignleValue(value);
                  }}
                />
              )}
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

export default DatepickerTypeGuide;
