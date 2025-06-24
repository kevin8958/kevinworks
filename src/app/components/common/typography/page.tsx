import Typography from '@/components/common/Typography';
import BreadCrumb from '@/components/layout/BreadCrumb';
import FlexWrapper from '@/components/layout/FlexWrapper';

export default function ComponentTypographyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components' },
    { label: 'Common' },
    { label: 'Typography', href: '/components/common/typography' },
  ];

  return (
    <div className="flex size-full flex-col items-start gap-4">
      <BreadCrumb items={breadcrumbItems} />
      <Typography variant="h2" classes="mb-10">
        Typography
      </Typography>
      <div className="grid grid-cols-12 grid-rows-12">
        <div className="col-span-6 flex flex-col gap-4">
          <FlexWrapper>
            <Typography variant="h2" classes="mb-0">
              Typography h2
            </Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Title</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="h3" classes="mb-0">
              Typography h3
            </Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Sub-Title</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="display1">Typography display1</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Huge Text</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="display2">Typography display2</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Big Text</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="body1">Typography body1</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Contents</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="body2">Typography body2</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Small Contents</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="caption">Typography caption</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for <em className="text-emphasis font-bold not-italic">Caption</em>
            </Typography>
          </FlexWrapper>
        </div>
      </div>
    </div>
  );
}
