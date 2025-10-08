'use client';

import DialogPlacementGuide from '@/components/common/dialog/DialogPlacementGuide';
import DialogStateGuide from '@/components/common/dialog/DialogStateGuide';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentDialogPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Dialog', href: '/components/common/dialog' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Dialog
          </Typography>
          <DialogPlacementGuide />
          <DialogStateGuide />
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
        title
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'The title of the datepicker.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        message
      </Badge>
    ),
    type: 'string',
    default: '',
    description: 'The message displayed below the datepicker.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        confirmText
      </Badge>
    ),
    type: 'string',
    default: 'Confirm',
    description: 'Text for the confirm button.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        cancelText
      </Badge>
    ),
    type: 'string',
    default: 'Cancel',
    description: 'Text for the cancel button.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        placement
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['top', 'center', 'bottom'].map((size) => (
          <Badge key={size} size="md">
            {size}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'center',
    description: 'Placement of the datepicker.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        state
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['info', 'success', 'warning', 'danger', 'default'].map((state) => (
          <Badge key={state} size="md">
            {state}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: 'default',
    description: 'State of the datepicker.',
  },
];
