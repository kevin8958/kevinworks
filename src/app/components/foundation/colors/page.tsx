import Typography from '@/components/foundation/Typography';
import PrimaryGuide from '@/components/foundation/colors/PrimaryGuide';
import SecondaryGuide from '@/components/foundation/colors/SecondaryGuide';
import GrayGuide from '@/components/foundation/colors/GrayGuide';
import BreadCrumb from '@/components/layout/BreadCrumb';
import FlexWrapper from '@/components/layout/FlexWrapper';
import StatusGuide from '@/components/foundation/colors/StatusGuide';

const ComponenColorsPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Colors', href: '/components/foundation/colors' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 px-4 pb-[100px]">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper classes="w-full" justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Colors
          </Typography>
          <PrimaryGuide />
          <SecondaryGuide />
          <GrayGuide />
          <StatusGuide />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
export default ComponenColorsPage;
