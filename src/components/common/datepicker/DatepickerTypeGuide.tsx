import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import dayjs from 'dayjs';
import Box from '@/components/common/Box';
import Datepicker from '@/components/common/DatePicker';
import Typography from '@/components/common/Typography';

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
      <Typography variant="h4" color="secondary">
        Type
      </Typography>
      <Box id="button-size-box" classes="h-[300px] w-full">
        <FlexWrapper classes="size-full" items="center" justify="center">
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
                  <Typography variant="caption" color="secondary">
                    {option.id}
                  </Typography>
                </FlexWrapper>
              </div>
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};

export default DatepickerTypeGuide;
