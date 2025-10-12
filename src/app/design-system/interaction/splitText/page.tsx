'use client';

import Typography from '@/design-system/foundation/Typography';
import SplitTextVariantGuide from '@/design-system/interaction/splitText/SplitTextVariantGuide';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentSplitTextPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'SplitText', href: '/design-system/interaction/splitText' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Split Text
          </Typography>
          <SplitTextVariantGuide />
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
    description: 'Custom classes for the component',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        variant
      </Badge>
    ),
    type: (
      <FlexWrapper items="start" gap={1} direction="col">
        <FlexWrapper items="center" gap={1}>
          {['H2', 'H3', 'H4', 'B1', 'B2', 'C1'].map((variant) => (
            <Badge key={variant} size="md">
              {variant}
            </Badge>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    ),
    default: "'B1'",
    description: 'Typography variant for the text',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        text
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'Text to be split and animated',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        delay
      </Badge>
    ),
    type: 'number',
    default: '100',
    description: 'Delay before the animation starts for each letter',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        repeat
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Whether to repeat the animation when the element comes back into view',
  },
];
