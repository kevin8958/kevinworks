import Typography from '@/components/foundation/Typography';
import BodyGuide from '@/components/foundation/typography/BodyGuide';
import CaptionGuide from '@/components/foundation/typography/CaptionGuide';
import HeadingGuide from '@/components/foundation/typography/HeadingGuide';
import BreadCrumb from '@/components/layout/BreadCrumb';
import FlexWrapper from '@/components/layout/FlexWrapper';

const ComponenTypographyPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Typography', href: '/components/foundation/typography' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 px-4">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
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
