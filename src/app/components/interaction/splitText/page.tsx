'use client';

import Typography from '@/components/common/Typography';
import SplitTextDefaultGuide from '@/components/interaction/splitText/SplitTextDefaultGuide';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';
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
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        classes
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Custom classes for the component',
  },
  {
    id: '2',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        variant
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['h2', 'h3', 'h4', 'display1', 'display2', 'body1', 'body2', 'caption'].map((variant) => (
          <span key={variant} className="bg-primary-800 rounded-md px-2 py-1">
            {variant}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: "'h2'",
    description: 'Typography variant for the text',
  },
  {
    id: '3',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        color
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['primary', 'secondary'].map((color) => (
          <span key={color} className="bg-primary-800 rounded-md px-2 py-1">
            {color}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: "'primary'",
    description: 'Color theme for the text',
  },
  {
    id: '4',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        text
      </span>
    ),
    type: 'string',
    default: '',
    description: 'Text to be split and animated',
  },
  {
    id: '5',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        delay
      </span>
    ),
    type: 'number',
    default: '100',
    description: 'Delay before the animation starts for each letter',
  },
  {
    id: '6',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        duration
      </span>
    ),
    type: 'number',
    default: '0.6',
    description: 'Duration of the animation for each letter',
  },
  {
    id: '7',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        ease
      </span>
    ),
    type: 'string',
    default: "'power3.out'",
    description: 'Easing function for the animation',
  },
  {
    id: '8',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        splitType
      </span>
    ),
    type: (
      <FlexWrapper items="center" gap={1}>
        {['chars', 'lines', 'words', 'words,chars'].map((size) => (
          <span key={size} className="bg-primary-800 rounded-md px-2 py-1">
            {size}
          </span>
        ))}
      </FlexWrapper>
    ),
    default: "'chars'",
    description: 'Type of split for the text: chars, lines, words, or words and chars',
  },
  {
    id: '9',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        from
      </span>
    ),
    type: 'Record<string, any>',
    default: '{opacity:0,y:40}',
    description: 'Initial CSS properties for the animation when the letters appear',
  },
  {
    id: '10',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">to</span>
    ),
    type: 'Record<string, any>',
    default: '{opacity:1,y:0}',
    description: 'Final CSS properties for the animation when the letters are fully visible',
  },
  {
    id: '11',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        threshold
      </span>
    ),
    type: 'number',
    default: '0.1',
    description: 'Intersection observer threshold for triggering the animation',
  },
  {
    id: '12',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        rootMargin
      </span>
    ),
    type: 'string',
    default: '-100px',
    description: 'Root margin for the intersection observer to trigger the animation',
  },
  {
    id: '13',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        repeat
      </span>
    ),
    type: 'boolean',
    default: 'false',
    description: 'Whether to repeat the animation when the element comes back into view',
  },
  {
    id: '14',
    property: (
      <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
        onLetterAnimationComplete
      </span>
    ),
    type: '() => void',
    default: '',
    description: 'Callback function that is called when all letters have completed their animation',
  },
];
