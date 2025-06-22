'use client';

import ButtonGroupSizeGuide from '@/components/common/buttonGroup/ButtonGroupSizeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentButtonGroupPage() {
  return (
    <FlexWrapper
      classes="w-full pb-20 overflow-scroll pr-6"
      direction="col"
      justify="start"
    >
      {/* <BreadCrumb locale={props.params.locale} items={breadcrumbItems} /> */}
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            ButtonGroup
          </Typography>
          <ButtonGroupSizeGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
