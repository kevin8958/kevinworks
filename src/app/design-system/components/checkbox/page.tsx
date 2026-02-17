'use client';

import CheckboxSizeGuide from '@/design-system/components/checkbox/CheckboxSizeGuide';
import CheckboxStateGuide from '@/design-system/components/checkbox/CheckboxStateGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentCheckboxPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Checkbox', href: '/design-system/components/checkbox' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Checkbox
          </Typography>
          <CheckboxSizeGuide />
          <CheckboxStateGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
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
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes for the checkbox.',
  },
  {
    id: '2',
    property: 'id',
    type: 'string',
    default: '',
    description: 'Unique identifier for the checkbox.',
  },
  {
    id: '3',
    property: 'label',
    type: 'string',
    default: '',
    description: 'Label for the checkbox.',
  },
  {
    id: '4',
    property: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is checked.',
  },
  {
    id: '5',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is disabled.',
  },
  {
    id: '6',
    property: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is in an invalid state.',
  },
  {
    id: '7',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'The size of the checkbox.',
  },
  {
    id: '8',
    property: 'onChange',
    type: 'function',
    default: '',
    description: 'Callback function triggered when the checkbox state changes.',
  },
];
