import Typography from '@/design-system/foundation/Typography';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import SimpleTable from '@/design-system/components/SimpleTable';
import BreadCrumb from '@/design-system/layout/BreadCrumb';
import CountUpVariantGuide from '@/design-system/interaction/countUp/CountUpVariantGuide';
import { propsColumn } from '@/constants/common';

const propsData = [
  {
    id: '1',
    property: 'to',
    type: 'number',
    default: '-',
    description: 'The target value to count up/down to.',
  },
  {
    id: '2',
    property: 'from',
    type: 'number',
    default: '0',
    description: 'The starting value of the animation.',
  },
  {
    id: '3',
    property: 'direction',
    type: ['up', 'down'],
    default: "'up'",
    description: 'Direction of the animation.',
  },
  {
    id: '4',
    property: 'duration',
    type: 'number',
    default: '2',
    description: 'Animation duration in seconds.',
  },
  {
    id: '5',
    property: 'delay',
    type: 'number',
    default: '0',
    description: 'Delay before starting the animation in seconds.',
  },
  {
    id: '6',
    property: 'separator',
    type: 'string',
    default: "''",
    description: 'Character used to separate thousands (e.g., ",").',
  },
  {
    id: '7',
    property: 'startWhen',
    type: 'boolean',
    default: 'true',
    description: 'Condition to trigger the animation.',
  },
  {
    id: '8',
    property: 'className',
    type: 'string',
    default: "''",
    description: 'CSS class for styling the span element.',
  },
  {
    id: '9',
    property: 'onStart',
    type: '() => void',
    default: '-',
    description: 'Callback function triggered when animation starts.',
  },
  {
    id: '10',
    property: 'onEnd',
    type: '() => void',
    default: '-',
    description: 'Callback function triggered when animation completes.',
  },
];

export default function ComponentCountUpPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'CountUp', href: '/design-system/interaction/countUp' },
  ];

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start" gap={12}>
      <BreadCrumb items={breadcrumbItems} />

      <header className="w-full space-y-4">
        <Typography variant="H1" color="primary">
          Count Up
        </Typography>
        <Typography variant="B1" classes="max-w-3xl">
          A flexible component to animate numbers with support for prefixes, suffixes, custom
          durations, and intersection observer for scroll-triggered animations.
        </Typography>
      </header>

      <CountUpVariantGuide />

      <FlexWrapper classes="w-full" items="start" direction="col" gap={4}>
        <Typography variant="H3">Properties</Typography>
        <SimpleTable columns={propsColumn} data={propsData} />
      </FlexWrapper>
    </FlexWrapper>
  );
}
