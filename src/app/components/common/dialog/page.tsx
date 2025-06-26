'use client';

import DialogPlacementGuide from '@/components/common/dialog/DialogPlacementGuide';
import DialogStateGuide from '@/components/common/dialog/DialogStateGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import { propsColumn } from '@/constants/common';

export default function ComponentDialogPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Dialog
          </Typography>
          <DialogPlacementGuide />
          <DialogStateGuide />
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
        title
      </span>
    ),
    type: 'string',
    default: '',
    description: 'The title of the datepicker.',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        message
      </span>
    ),
    type: 'string',
    default: '',
    description: 'The message displayed below the datepicker.',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        confirmText
      </span>
    ),
    type: 'string',
    default: 'Confirm',
    description: 'Text for the confirm button.',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        cancelText
      </span>
    ),
    type: 'string',
    default: 'Cancel',
    description: 'Text for the cancel button.',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        placement
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['top', 'center', 'bottom'].map((size) => (
          <span key={size} className="bg-primary-800 rounded-md px-2 py-1">
            {size}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'center',
    description: 'Placement of the datepicker.',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        state
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['info', 'success', 'warning', 'danger', 'default'].map((state) => (
          <span key={state} className="bg-primary-800 rounded-md px-2 py-1">
            {state}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: 'default',
    description: 'State of the datepicker.',
  },
];
