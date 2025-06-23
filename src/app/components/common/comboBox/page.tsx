'use client';

import ComboBoxBasicGuide from '@/components/common/comboBox/ComboBoxBasicGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentComboBoxPage() {
  return (
    <FlexWrapper classes="w-full pb-20 overflow-scroll pr-6" direction="col" justify="start">
      {/* <BreadCrumb locale={props.params.locale} items={breadcrumbItems} /> */}
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            ComboBox
          </Typography>
          <ComboBoxBasicGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
