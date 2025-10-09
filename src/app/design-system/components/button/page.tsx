'use client';

import ButtonSizeGuide from '@/design-system/components/button/ButtonSizeGuide';
import ButtonStateGuide from '@/design-system/components/button/ButtonStateGuide';
import ButtonVariantGuide from '@/design-system/components/button/ButtonVariantGuide';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';

export default function ComponentButtonPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Button', href: '/design-system/components/button' },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Button
          </Typography>
          <ButtonSizeGuide />
          <ButtonVariantGuide />
          <ButtonStateGuide />
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
    description: 'Custom classes for the button.',
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
        {['button', 'submit'].map((type) => (
          <Badge key={type} size="md">
            {type}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'button',
    description: 'The type of the button.',
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
    description: 'The size of the button.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        variant
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['contain', 'outline', 'clear'].map((variant) => (
          <Badge key={variant} size="md">
            {variant}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'contain',
    description: 'The variant of the button.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        color
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['primary', 'info', 'success', 'warning', 'danger'].map((color) => (
          <Badge key={color} size="md">
            {color}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'primary',
    description: 'The color of the button.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        disabled
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will be disabled.',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        loading
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a loading spinner.',
  },
  {
    id: '8',
    property: (
      <Badge color="secondary" size="md">
        prompted
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'If true, the button will show a prompt state.',
  },
  {
    id: '9',
    property: (
      <Badge color="secondary" size="md">
        icon
      </Badge>
    ),
    type: 'ReactNode',
    default: '',
    description: 'The icon to be displayed in the button.',
  },
  {
    id: '10',
    property: (
      <Badge color="secondary" size="md">
        iconPosition
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['left', 'right'].map((position) => (
          <Badge key={position} size="md">
            {position}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'left',
    description: 'The position of the icon in the button. Can be "left" or "right".',
  },
  {
    id: '11',
    property: (
      <Badge color="secondary" size="md">
        onClick
      </Badge>
    ),
    type: '(e) => void',
    default: '',
    description: 'Function to be called when the button is clicked.',
  },
];
