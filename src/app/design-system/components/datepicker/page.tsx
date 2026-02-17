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
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom classes for the button group.',
  },
  {
    id: '2',
    property: 'type',
    type: ['single', 'range'],
    default: 'single',
    description: 'Type of the datepicker.',
  },
  {
    id: '3',
    property: 'value',
    type: ['Date', 'null'],
    default: null,
    description: 'Selected date value.',
  },
  {
    id: '4',
    property: 'minDate',
    type: ['Date', 'null'],
    default: null,
    description: 'Minimum selectable date.',
  },
  {
    id: '5',
    property: 'maxDate',
    type: ['Date', 'null'],
    default: null,
    description: 'Maximum selectable date.',
  },
  {
    id: '6',
    property: 'isError',
    type: 'boolean',
    default: false,
    description: 'Indicates if there is an error with the datepicker.',
  },
  {
    id: '7',
    property: 'isNullable',
    type: 'boolean',
    default: false,
    description: 'Allows the datepicker to accept a null value, useful for clearing the selection.',
  },
  {
    id: '8',
    property: 'isFilter',
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker is used for filtering.',
  },
  {
    id: '9',
    property: 'placeholder',
    type: 'string',
    default: '',
    description: 'Placeholder text for the datepicker input.',
  },
  {
    id: '10',
    property: 'isRange',
    type: 'boolean',
    default: false,
    description: 'Indicates if the datepicker allows selecting a range of dates.',
  },
  {
    id: '11',
    property: 'isMultiple',
    type: 'boolean',
    default: false,
    description: 'Allows selecting multiple dates when set to true, applicable in range mode.',
  },
  {
    id: '12',
    property: 'startDate',
    type: 'Date',
    default: null,
    description: 'Start date for range selection, required when isRange is true.',
  },
  {
    id: '13',
    property: 'endDate',
    type: 'Date',
    default: null,
    description: 'End date for range selection, required when isRange is true.',
  },
  {
    id: '14',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: 'md',
    description: 'Size of the datepicker.',
  },
  {
    id: '15',
    property: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disables the datepicker when true.',
  },
  {
    id: '16',
    property: 'hideHeaderButtons',
    type: 'boolean',
    default: false,
    description: 'Hides the header buttons (today, clear) when set to true.',
  },
  {
    id: '17',
    property: 'onChange',
    type: '(value: Date | null) => void',
    default: '',
    description: 'Callback function triggered when the date value changes.',
  },
];
