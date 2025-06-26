'use client';

import ButtonSizeGuide from '@/components/common/button/ButtonSizeGuide';
import ButtonStateGuide from '@/components/common/button/ButtonStateGuide';
import ButtonVariantGuide from '@/components/common/button/ButtonVariantGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentButtonPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      {/* <BreadCrumb locale={props.params.locale} items={breadcrumbItems} /> */}
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Button
          </Typography>
          <ButtonSizeGuide />
          <ButtonVariantGuide />
          <ButtonStateGuide />
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
    description: 'Custom classes for the button.',
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
        {['button', 'submit'].map((type) => (
          <span key={type} className="bg-primary-800 rounded-md px-2 py-1">
            {type}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'button',
    description: 'The type of the button.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        size
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['lg', 'md', 'sm'].map((size) => (
          <span key={size} className="bg-primary-800 rounded-md px-2 py-1">
            {size}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'md',
    description: 'The size of the button.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        variant
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['contain', 'outline', 'clear'].map((variant) => (
          <span key={variant} className="bg-primary-800 rounded-md px-2 py-1">
            {variant}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'contain',
    description: 'The variant of the button.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        color
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['primary', 'info', 'success', 'warning', 'danger'].map((color) => (
          <span key={color} className="bg-primary-800 rounded-md px-2 py-1">
            {color}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'primary',
    description: 'The color of the button.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        disabled
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will be disabled.',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        loading
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a loading spinner.',
  },
  {
    id: '8',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        prompted
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a prompt state.',
  },
  {
    id: '9',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        icon
      </span>
    ),
    type: 'ReactNode',
    default: '',
    description: 'The icon to be displayed in the button.',
  },
  {
    id: '10',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        iconPosition
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['left', 'right'].map((position) => (
          <span key={position} className="bg-primary-800 rounded-md px-2 py-1">
            {position}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'left',
    description: 'The position of the icon in the button. Can be "left" or "right".',
  },
  {
    id: '11',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onClick
      </span>
    ),
    type: '(e) => void',
    default: '',
    description: 'Function to be called when the button is clicked.',
  },
];
