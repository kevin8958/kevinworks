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
          <Typography variant="H1" color="secondary">
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
    property: (
      <Badge color="secondary" size="md">
        classes
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the button group.',
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
    description: 'The title of the button group.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        size
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['lg', 'md', 'sm'].map((size) => (
          <Badge key={size} size="md">
            {size}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the button group.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        value
      </Badge>
    ),
    type: 'object',
    default: '',
    description: 'The selected option of the button group.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        options
      </Badge>
    ),
    type: 'array',
    default: '',
    description: 'The options of the button group.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        onChange
      </Badge>
    ),
    type: '(option) => void',
    default: '',
    description: 'Callback function when the selected option changes in the button group.',
  },
];
