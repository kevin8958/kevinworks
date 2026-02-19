'use client';

import ProgressSizeGuide from '@/design-system/components/progress/ProgressSizeGuide';
import ProgressLabelPositionGuide from '@/design-system/components/progress/ProgressLabelPositionGuide';
import ProgressTypeGuide from '@/design-system/components/progress/ProgressTypeGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentProgressPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Progress', href: '/design-system/components/progress' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="primary">
            Progress
          </Typography>
          <ProgressSizeGuide />
          <ProgressLabelPositionGuide />
          <ProgressTypeGuide />
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
    property: 'value',
    type: 'number',
    default: '0',
    description: 'Current value of the progress bar.',
  },
  {
    id: '2',
    property: 'size',
    type: ['sm', 'md', 'lg'],
    default: "'md'",
    description: 'Size of the progress bar.',
  },
  {
    id: '3',
    property: 'width',
    type: ['string', 'number'],
    default: '',
    description: 'Width of the progress bar container.',
  },
  {
    id: '4',
    property: 'label',
    type: 'string',
    default: '',
    description: 'Label text displayed on the progress bar.',
  },
  {
    id: '5',
    property: 'labelPosition',
    type: ['top', 'bottom', 'inside'],
    default: "'bottom'",
    description: 'Position of the label relative to the progress bar.',
  },
  {
    id: '6',
    property: 'isCircle',
    type: 'boolean',
    default: 'false',
    description: 'Whether to render the progress bar as a circular progress indicator.',
  },
];
