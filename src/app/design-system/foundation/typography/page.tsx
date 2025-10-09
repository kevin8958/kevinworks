import Typography from '@/design-system/foundation/Typography';
import BodyGuide from '@/design-system/foundation/typography/BodyGuide';
import CaptionGuide from '@/design-system/foundation/typography/CaptionGuide';
import HeadingGuide from '@/design-system/foundation/typography/HeadingGuide';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import FlexWrapper from '@/design-system/layout/FlexWrapper';

const ComponenTypographyPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Typography', href: '/design-system/foundation/typography' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 px-4 pb-[100px]">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper classes="w-full" justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Typography
          </Typography>
          <HeadingGuide />
          <BodyGuide />
          <CaptionGuide />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
export default ComponenTypographyPage;
