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
          <Typography variant="H1" color="secondary">
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
    property: (
      <Badge color="secondary" size="md">
        value
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">number</Badge>
      </FlexWrapper>
    ),
    default: '0',
    description: 'Current value of the progress bar.',
  },
  {
    id: '2',
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
    default: "'md'",
    description: 'Size of the progress bar.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        width
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string | number</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Width of the progress bar container.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        label
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Label text displayed on the progress bar.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        labelPosition
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['top', 'bottom', 'inside'].map((position) => (
          <Badge key={position} size="md">
            {position}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: "'bottom'",
    description: 'Position of the label relative to the progress bar.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        isCircle
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">boolean</Badge>
      </FlexWrapper>
    ),
    default: 'false',
    description: 'Whether to render the progress bar as a circular progress indicator.',
  },
];
