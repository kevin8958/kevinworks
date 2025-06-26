'use client';

import DrawerDefaultGuide from '@/components/common/drawer/DrawerDefaultGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentDrawerPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
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
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        open
      </span>
    ),
    type: 'boolean',
    default: '',
    description: 'Controls the visibility of the drawer.',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        title
      </span>
    ),
    type: 'string',
    default: '',
    description: 'The title displayed at the top of the drawer.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        children
      </span>
    ),
    type: 'React.ReactNode',
    default: '',
    description: 'Content to be displayed inside the drawer.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        showFooter
      </span>
    ),
    type: 'boolean',
    default: 'true',
    description: 'Controls the visibility of the footer section.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onConfirm
      </span>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the confirm button is clicked.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onCancel
      </span>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the cancel button is clicked.',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onClose
      </span>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function triggered when the drawer is closed.',
  },
];
