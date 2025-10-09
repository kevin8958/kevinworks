import Typography from '@/design-system/foundation/Typography';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentButtonPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System' },
    { label: 'Layout' },
    { label: 'Global Navigation Bar', href: '/design-system/layout/gnb' },
  ];

  return (
    <div className="flex size-full flex-col items-start gap-4">
      <BreadCrumb items={breadcrumbItems} />
      <Typography variant="H2">Gnb</Typography>
    </div>
  );
}
