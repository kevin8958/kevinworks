import Typography from '@/components/common/Typography';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentButtonPage() {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components' },
    { label: 'Common' },
    { label: 'Side Navigation Bar', href: '/components/layout/snb' },
  ];

  return (
    <div className="flex size-full flex-col items-start gap-4">
      <BreadCrumb items={breadcrumbItems} />
      <Typography variant="h3">Snb</Typography>
    </div>
  );
}
