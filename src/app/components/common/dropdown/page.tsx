'use client';

import DropdownSizeGuide from '@/components/common/dropdown/DropdownSizeGuide';
import DropdownPositionGuide from '@/components/common/dropdown/DropdownPositionGuide';
import DropdownGroupGuide from '@/components/common/dropdown/DropdownGroupGuide';
import DropdownDangerGuide from '@/components/common/dropdown/DropdownDangerGuide';
import DropdownSubMenuGuide from '@/components/common/dropdown/DropdownSubMenuGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/components/layout/BreadCrumb';

export default function ComponentDropdownPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Dropdown', href: '/components/common/dropdown' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Dropdown
          </Typography>
          <DropdownSizeGuide />
          <DropdownPositionGuide />
          <DropdownGroupGuide />
          <DropdownDangerGuide />
          <DropdownSubMenuGuide />
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
      <Badge color="secondary" size="md">
        items
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">DropdownItem[]</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Array of dropdown items.',
  },
  {
    id: '2',
    property: (
      <Badge color="secondary" size="md">
        onChange
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">function</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Callback function when an item is selected.',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        dialogPosition
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
    default: "'left'",
    description: 'Position of the dropdown dialog.',
  },
  {
    id: '4',
    property: (
      <Badge color="secondary" size="md">
        dialogWidth
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">number</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Width of the dropdown dialog.',
  },
  {
    id: '5',
    property: (
      <Badge color="secondary" size="md">
        buttonItem
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string | React.ReactNode</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Content of the button that opens the dropdown.',
  },
  {
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        buttonClasses
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        <Badge size="md">string</Badge>
      </FlexWrapper>
    ),
    default: '',
    description: 'Additional classes for the button.',
  },
];
