'use client';

import DatepickerTypeGuide from '@/components/common/datepicker/DatepickerTypeGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentDatepickerPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Datepicker
          </Typography>
          <DatepickerTypeGuide />
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
    description: 'Custom classes for the button group.',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        type
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['single', 'range'].map((type) => (
          <span key={type} className="bg-primary-800 rounded-md px-2 py-1">
            {type}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'single',
    description: 'Type of the datepicker.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        value
      </span>
    ),
    type: 'Date | null',
    default: null,
    description: 'Selected date value.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        minDate
      </span>
    ),
    type: 'Date | null',
    default: null,
    description: 'Minimum selectable date.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        maxDate
      </span>
    ),
    type: 'Date | null',
    default: null,
    description: 'Maximum selectable date.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        isError
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if there is an error with the datepicker.',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        isNullable
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Allows the datepicker to accept a null value, useful for clearing the selection.',
  },
  {
    id: '8',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        isFilter
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker is used for filtering.',
  },
  {
    id: '9',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        placeholder
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Placeholder text for the datepicker input.',
  },
  {
    id: '10',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        isRange
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker allows selecting a range of dates.',
  },
  {
    id: '11',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        isMultiple
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Allows selecting multiple dates when set to true, applicable in range mode.',
  },
  {
    id: '12',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        startDate
      </span>
    ),
    type: 'Date',
    default: null,
    description: 'Start date for range selection, required when isRange is true.',
  },
  {
    id: '13',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        endDate
      </span>
    ),
    type: 'Date',
    default: null,
    description: 'End date for range selection, required when isRange is true.',
  },
  {
    id: '14',
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
    description: 'Size of the datepicker.',
  },
  {
    id: '15',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        disabled
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Disables the datepicker when true.',
  },
  {
    id: '16',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        hideHeaderButtons
      </span>
    ),
    type: 'boolean',
    default: false,
    description: 'Hides the header buttons (today, clear) when set to true.',
  },
  {
    id: '17',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onChange
      </span>
    ),
    type: '(value: Date | null) => void',
    default: '',
    description: 'Callback function triggered when the date value changes.',
  },
];
