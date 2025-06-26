'use client';

import ButtonGroupSizeGuide from '@/components/common/buttonGroup/ButtonGroupSizeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';

export default function ComponentButtonGroupPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            ButtonGroup
          </Typography>
          <ButtonGroupSizeGuide />
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
