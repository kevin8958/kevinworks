import Typography from '@/design-system/foundation/Typography';
import PrimaryGuide from '@/design-system/foundation/colors/PrimaryGuide';
import SecondaryGuide from '@/design-system/foundation/colors/SecondaryGuide';
import NeutralGuide from '@/design-system/foundation/colors/NeutralGuide';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import StatusGuide from '@/design-system/foundation/colors/StatusGuide';

const ComponenColorsPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Colors', href: '/design-system/foundation/colors' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 px-4 pb-[100px]">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper classes="w-full" justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="primary">
            Colors
          </Typography>
          <PrimaryGuide />
          <SecondaryGuide />
          <NeutralGuide />
          <StatusGuide />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
export default ComponenColorsPage;
