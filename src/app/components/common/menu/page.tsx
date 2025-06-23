import Typography from '@/components/common/Typography';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentMenuPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components' },
    { label: 'Common' },
    { label: 'Menu', href: '/components/common/menu' },
  ];

  return (
    <div className="flex size-full flex-col items-start gap-4">
      <BreadCrumb items={breadcrumbItems} />
      <Typography variant="h3">Menu</Typography>
    </div>
  );
}
