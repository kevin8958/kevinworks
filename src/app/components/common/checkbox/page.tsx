'use client';

import CheckboxSizeGuide from '@/components/common/checkbox/CheckboxSizeGuide';
import CheckboxStateGuide from '@/components/common/checkbox/CheckboxStateGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentCheckboxPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Checkbox
          </Typography>
          <CheckboxSizeGuide />
          <CheckboxStateGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
