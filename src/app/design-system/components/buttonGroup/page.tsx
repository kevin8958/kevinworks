'use client';

import ButtonGroupSizeGuide from '@/design-system/components/buttonGroup/ButtonGroupSizeGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentButtonGroupPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Button Group', href: '/design-system/components/buttonGroup' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="primary">
            ButtonGroup
          </Typography>
          <ButtonGroupSizeGuide />
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
    description: 'Custom classes for the button group.',
  },
  {
    id: '2',
    property: 'title',
    type: 'string',
    default: '',
    description: 'The title of the button group.',
  },
  {
    id: '3',
    property: 'size',
    type: ['lg', 'md', 'sm'],
    default: 'md',
    description: 'The size of the button group.',
  },
  {
    id: '4',
    property: 'value',
    type: 'object',
    default: '',
    description: 'The selected option of the button group.',
  },
  {
    id: '5',
    property: 'options',
    type: 'array',
    default: '',
    description: 'The options of the button group.',
  },
  {
    id: '6',
    property: 'onChange',
    type: '(option) => void',
    default: '',
    description: 'Callback function when the selected option changes in the button group.',
  },
];
