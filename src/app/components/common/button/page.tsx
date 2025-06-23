'use client';

import ButtonSizeGuide from '@/components/common/button/ButtonSizeGuide';
import ButtonStateGuide from '@/components/common/button/ButtonStateGuide';
import ButtonVariantGuide from '@/components/common/button/ButtonVariantGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

// const breadcrumbItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Components' },
//   { label: 'Common' },
//   { label: 'Button', href: '/components/common/button' },
// ];

export default function ComponentButtonPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      {/* <BreadCrumb locale={props.params.locale} items={breadcrumbItems} /> */}
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Button
          </Typography>
          <ButtonSizeGuide />
          <ButtonVariantGuide />
          <ButtonStateGuide />
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
