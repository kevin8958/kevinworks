'use client';

import DatepickerTypeGuide from '@/design-system/components/datepicker/DatepickerTypeGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import DatepickerVariantGuide from '@/design-system/components/datepicker/DatepickerVariantGuide';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentDatepickerPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Datepicker', href: '/design-system/components/datepicker' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Datepicker
          </Typography>
          <DatepickerTypeGuide />
          <DatepickerVariantGuide />
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
        type
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['single', 'range'].map((type) => (
          <Badge key={type} size="md">
            {type}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'single',
    description: 'Type of the datepicker.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        value
      </Badge>
    ),
    type: 'Date | null',
    default: null,
    description: 'Selected date value.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        minDate
      </Badge>
    ),
    type: 'Date | null',
    default: null,
    description: 'Minimum selectable date.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        maxDate
      </Badge>
    ),
    type: 'Date | null',
    default: null,
    description: 'Maximum selectable date.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        isError
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if there is an error with the datepicker.',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        isNullable
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Allows the datepicker to accept a null value, useful for clearing the selection.',
  },
  {
    id: '8',
    property: (
      <Badge color="secondary" size="md">
        isFilter
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker is used for filtering.',
  },
  {
    id: '9',
    property: (
      <Badge color="secondary" size="md">
        placeholder
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Placeholder text for the datepicker input.',
  },
  {
    id: '10',
    property: (
      <Badge color="secondary" size="md">
        isRange
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker allows selecting a range of dates.',
  },
  {
    id: '11',
    property: (
      <Badge color="secondary" size="md">
        isMultiple
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Allows selecting multiple dates when set to true, applicable in range mode.',
  },
  {
    id: '12',
    property: (
      <Badge color="secondary" size="md">
        startDate
      </Badge>
    ),
    type: 'Date',
    default: null,
    description: 'Start date for range selection, required when isRange is true.',
  },
  {
    id: '13',
    property: (
      <Badge color="secondary" size="md">
        endDate
      </Badge>
    ),
    type: 'Date',
    default: null,
    description: 'End date for range selection, required when isRange is true.',
  },
  {
    id: '14',
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
    description: 'Size of the datepicker.',
  },
  {
    id: '15',
    property: (
      <Badge color="secondary" size="md">
        disabled
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Disables the datepicker when true.',
  },
  {
    id: '16',
    property: (
      <Badge color="secondary" size="md">
        hideHeaderButtons
      </Badge>
    ),
    type: 'boolean',
    default: false,
    description: 'Hides the header buttons (today, clear) when set to true.',
  },
  {
    id: '17',
    property: (
      <Badge color="secondary" size="md">
        onChange
      </Badge>
    ),
    type: '(value: Date | null) => void',
    default: '',
    description: 'Callback function triggered when the date value changes.',
  },
];
