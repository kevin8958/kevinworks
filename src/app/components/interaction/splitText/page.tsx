'use client';

import Typography from '@/components/common/Typography';
import SplitTextDefaultGuide from '@/components/interaction/splitText/SplitTextDefaultGuide';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
import Badge from '@/components/common/Badge';
import { propsColumn } from '@/constants/common';

export default function ComponentSplitTextPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="h2" color="secondary">
            Split Text
          </Typography>
          <SplitTextDefaultGuide />
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
          {['h2', 'h3', 'h4', 'display1', 'display2'].map((variant) => (
            <Badge key={variant} size="md">
              {variant}
            </Badge>
          ))}
        </FlexWrapper>
        <FlexWrapper items="center" gap={1}>
          {['body1', 'body2', 'caption'].map((variant) => (
            <Badge key={variant} size="md">
              {variant}
            </Badge>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    ),
    default: "'h2'",
    description: 'Typography variant for the text',
  },
  {
    id: '3',
    property: (
      <Badge color="secondary" size="md">
        color
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['primary', 'secondary'].map((color) => (
          <Badge key={color} size="md">
            {color}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: "'primary'",
    description: 'Color theme for the text',
  },
  {
    id: '4',
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
    id: '5',
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
    id: '6',
    property: (
      <Badge color="secondary" size="md">
        duration
      </Badge>
    ),
    type: 'number',
    default: '0.6',
    description: 'Duration of the animation for each letter',
  },
  {
    id: '7',
    property: (
      <Badge color="secondary" size="md">
        ease
      </Badge>
    ),
    type: 'string',
    default: "'power3.out'",
    description: 'Easing function for the animation',
  },
  {
    id: '8',
    property: (
      <Badge color="secondary" size="md">
        splitType
      </Badge>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['chars', 'lines', 'words', 'words,chars'].map((size) => (
          <Badge key={size} size="md">
            {size}
          </Badge>
        ))}
      </FlexWrapper>
    ),
    default: "'chars'",
    description: 'Type of split for the text: chars, lines, words, or words and chars',
  },
  {
    id: '9',
    property: (
      <Badge color="secondary" size="md">
        from
      </Badge>
    ),
    type: 'Record<string, any>',
    default: '{opacity:0,y:40}',
    description: 'Initial CSS properties for the animation when the letters appear',
  },
  {
    id: '10',
    property: (
      <Badge color="secondary" size="md">
        to
      </Badge>
    ),
    type: 'Record<string, any>',
    default: '{opacity:1,y:0}',
    description: 'Final CSS properties for the animation when the letters are fully visible',
  },
  {
    id: '11',
    property: (
      <Badge color="secondary" size="md">
        threshold
      </Badge>
    ),
    type: 'number',
    default: '0.1',
    description: 'Intersection observer threshold for triggering the animation',
  },
  {
    id: '12',
    property: (
      <Badge color="secondary" size="md">
        rootMargin
      </Badge>
    ),
    type: 'string',
    default: '-100px',
    description: 'Root margin for the intersection observer to trigger the animation',
  },
  {
    id: '13',
    property: (
      <Badge color="secondary" size="md">
        repeat
      </Badge>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Whether to repeat the animation when the element comes back into view',
  },
  {
    id: '14',
    property: (
      <Badge color="secondary" size="md">
        onLetterAnimationComplete
      </Badge>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function that is called when all letters have completed their animation',
  },
];
