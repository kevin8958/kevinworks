'use client';

import DatepickerTypeGuide from '@/components/common/datepicker/DatepickerTypeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentDatepickerPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Datepicker
          </Typography>
          <DatepickerTypeGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
