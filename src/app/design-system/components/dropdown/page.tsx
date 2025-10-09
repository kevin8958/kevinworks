'use client';

import DropdownSizeGuide from '@/design-system/components/dropdown/DropdownSizeGuide';
import DropdownPositionGuide from '@/design-system/components/dropdown/DropdownPositionGuide';
import DropdownGroupGuide from '@/design-system/components/dropdown/DropdownGroupGuide';
import DropdownDangerGuide from '@/design-system/components/dropdown/DropdownDangerGuide';
import DropdownSubMenuGuide from '@/design-system/components/dropdown/DropdownSubMenuGuide';
import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import Badge from '@/design-system/components/Badge';
import { propsColumn } from '@/constants/common';
import BreadCrumb from '@/design-system/layout/BreadCrumb';

export default function ComponentDropdownPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Dropdown', href: '/design-system/components/dropdown' },
  ];
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1" color="secondary">
            Dropdown
          </Typography>
          <DropdownSizeGuide />
          <DropdownPositionGuide />
          <DropdownGroupGuide />
          <DropdownDangerGuide />
          <DropdownSubMenuGuide />
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
