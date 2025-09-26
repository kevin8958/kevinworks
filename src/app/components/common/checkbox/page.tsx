'use client';

import CheckboxSizeGuide from '@/components/common/checkbox/CheckboxSizeGuide';
import CheckboxStateGuide from '@/components/common/checkbox/CheckboxStateGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentCheckboxPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Checkbox', href: '/components/common/checkbox' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Checkbox
          </Typography>
          <CheckboxSizeGuide />
          <CheckboxStateGuide />
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
        classes
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the checkbox.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        id
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Unique identifier for the checkbox.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        label
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Label for the checkbox.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        checked
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is checked.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        disabled
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is disabled.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        invalid
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is in an invalid state.',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        size
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['sm', 'md', 'lg'].map((size) => (
          <Badge key={size} size="md">
            {size}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the checkbox.',
  },
  {
    id: '8',
    property: (
      <Badge color="secondary" size="md">
        onChange
      </Badge>
    ),
    type: 'function',
    default: '',
    description: 'Callback function triggered when the checkbox state changes.',
  },
];
