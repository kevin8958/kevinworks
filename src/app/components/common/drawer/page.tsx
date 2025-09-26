'use client';

import DrawerDefaultGuide from '@/components/common/drawer/DrawerDefaultGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentDrawerPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Drawer', href: '/components/common/drawer' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Drawer
          </Typography>
          <DrawerDefaultGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="h4">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: (
      <Badge color="secondary" size="md">
        open
      </Badge>
    ),
    type: 'boolean',
    default: '',
    description: 'Controls the visibility of the drawer.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        title
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'The title displayed at the top of the drawer.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        children
      </Badge>
    ),
    type: 'React.ReactNode',
    default: '',
    description: 'Content to be displayed inside the drawer.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        showFooter
      </Badge>
    ),
    type: 'boolean',
    default: 'true',
    description: 'Controls the visibility of the footer section.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        onConfirm
      </Badge>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the confirm button is clicked.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        onCancel
      </Badge>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the cancel button is clicked.',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        onClose
      </Badge>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the drawer is closed.',
  },
];
