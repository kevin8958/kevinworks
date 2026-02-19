'use client';

import TextInputDefaultGuide from '@/design-system/components/textInput/TextInputDefaultGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentTextInputPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'TextInput', href: '/design-system/components/textInput' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="primary">
            TextInput
          </Typography>
          <TextInputDefaultGuide />
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
    property: 'label',
    type: 'string',
    default: '',
    description: 'Label for the input field.',
  },
  {
    id: '2',
    property: 'placeholder',
    type: 'string',
    default: '',
    description: 'Placeholder text for the input field.',
  },
  {
    id: '3',
    property: 'id',
    type: 'string',
    default: '',
    description: 'Unique identifier for the input element.',
  },
  {
    id: '4',
    property: 'classes',
    type: 'string',
    default: '',
    description: 'Custom CSS classes for styling the input.',
  },
  {
    id: '5',
    property: 'type',
    type: ['text', 'password', 'email', 'number'],
    default: "'text'",
    description: 'Type of the input field.',
  },
  {
    id: '6',
    property: 'value',
    type: 'string',
    default: '',
    description: 'Current value of the input field.',
  },
  {
    id: '7',
    property: 'max',
    type: 'number',
    default: '',
    description: 'Maximum length of the input value.',
  },
  {
    id: '8',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: "'md'",
    description: "Size of the input field. Options are 'sm', 'md', or 'lg'.",
  },
  {
    id: '9',
    property: 'required',
    type: 'boolean',
    default: false,
    description:
      'Indicates whether the input field is required. If true, an asterisk will be displayed next to the label.',
  },
  {
    id: '10',
    property: 'disabled',
    type: 'boolean',
    default: false,
    description: 'Disables the input field if set to true.',
  },
  {
    id: '11',
    property: 'error',
    type: 'boolean',
    default: false,
    description: 'Indicates if there is an error with the input.',
  },
  {
    id: '12',
    property: 'errorMsg',
    type: 'string',
    default: '',
    description: 'Error message to display when error is true.',
  },
  {
    id: '13',
    property: 'inputProps',
    type: 'any',
    default: '{}',
    description: 'Additional properties to be passed to the input element.',
  },
  {
    id: '14',
    property: 'rounded',
    type: ['sm', 'md', 'lg', '2xl'],
    default: "'lg'",
    description:
      "Defines the border radius of the input field. Options are 'sm', 'md', 'lg', or '2xl'.",
  },
  {
    id: '15',
    property: 'suffix',
    type: ['string', 'ReactNode'],
    default: '',
    description: 'Optional suffix element that appears at the end of the input field.',
  },
  {
    id: '16',
    property: 'autoFocus',
    type: 'boolean',
    default: false,
    description: 'If true, the input field will automatically receive focus when rendered.',
  },
  {
    id: '17',
    property: 'onChange',
    type: '(e) => void',
    default: '',
    description: 'Callback function triggered when the value of the input changes.',
  },
  {
    id: '18',
    property: 'onFocus',
    type: '(e) => void',
    default: '',
    description: 'Callback function triggered when the input receives focus.',
  },
  {
    id: '19',
    property: 'onBlur',
    type: '(e) => void',
    default: '',
    description: 'Callback function triggered when the input loses focus.',
  },
  {
    id: '20',
    property: 'onKeyUp',
    type: '(e) => void',
    default: '',
    description: 'Callback function triggered when a key is released while the input is focused.',
  },
];
