
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
      <BreadCrumb  items={breadcrumbItems} />
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
              for <em className="font-bold not-italic text-emphasis">Title</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="h3" classes="mb-0">
              Typography h3
            </Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">Sub-Title</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="display1">Typography display1</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">Huge Text</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="display2">Typography display2</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">Big Text</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="body1">Typography body1</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">Contents</em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="body2">Typography body2</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">
                Small Contents
              </em>
            </Typography>
          </FlexWrapper>
          <FlexWrapper>
            <Typography variant="caption">Typography caption</Typography>
            <Typography variant="body1" classes="flex items-center gap-2">
              for{' '}
              <em className="font-bold not-italic text-emphasis">Caption</em>
            </Typography>
          </FlexWrapper>
        </div>
        <div className="col-span-6 row-span-12">
          <Typography variant="display1" classes="mb-4">
            code usage
          </Typography>
          <div className="rounded-lg border border-textPrimary p-4 font-bold text-emphasis">
            <pre>
              <code>{`<Typography variant="variant"> Children </Typography>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
