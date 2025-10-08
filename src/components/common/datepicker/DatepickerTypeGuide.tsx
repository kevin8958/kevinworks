import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import dayjs from 'dayjs';
import Datepicker from '@/components/common/DatePicker';
import Typography from '@/components/foundation/Typography';

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
    <FlexWrapper classes="w-full" items="start" direction="col">
      <Typography variant="H3">Type</Typography>
      <FlexWrapper classes="size-full px-6" items="center">
        <FlexWrapper items="end">
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
    </FlexWrapper>
  );
};

export default DatepickerTypeGuide;
