'use client';

import CheckboxSizeGuide from '@/components/common/checkbox/CheckboxSizeGuide';
import CheckboxStateGuide from '@/components/common/checkbox/CheckboxStateGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentCheckboxPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
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
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        classes
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the checkbox.',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">id</span>
    ),
    type: 'string',
    default: '',
    description: 'Unique identifier for the checkbox.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        label
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Label for the checkbox.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        checked
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is checked.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        disabled
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is disabled.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        invalid
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Indicates whether the checkbox is in an invalid state.',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        size
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['sm', 'md', 'lg'].map((size) => (
          <span key={size} className="bg-primary-800 rounded-md px-2 py-1">
            {size}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the checkbox.',
  },
  {
    id: '8',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onChange
      </span>
    ),
    type: 'function',
    default: '',
    description: 'Callback function triggered when the checkbox state changes.',
  },
];
