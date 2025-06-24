'use client';

import AlertVriantGuide from '@/components/common/alert/AlertVriantGuide';
import AlertStateGuide from '@/components/common/alert/AlertStateGuide';
import AlertCloseGuide from '@/components/common/alert/AlertCloseGuide';
import AlertIconGuide from '@/components/common/alert/AlertIconGuide';
import Typography from '@/components/common/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/common/SimpleTable';

export default function ComponentAlertPage() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-[60px]" items="start" direction="col">
          <FlexWrapper classes="w-full" items="end" justify="between">
            <Typography variant="h2" color="secondary">
              Alert
            </Typography>
          </FlexWrapper>
          <AlertVriantGuide />
          <AlertStateGuide />
          <AlertCloseGuide />
          <AlertIconGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="h4">Props</Typography>
            <SimpleTable
              columns={[
                { label: 'Property', key: 'property' },
                { label: 'Type', key: 'type' },
                { label: 'Default', key: 'default' },
                { label: 'Description', key: 'description' },
              ]}
              data={[
                {
                  id: '1',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      classes
                    </span>
                  ),
                  type: 'string',
                  default: '',
                  description: 'Custom classes for the alert.',
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
                      {['contain', 'outline'].map((state) => (
                        <span key={state} className="bg-primary-800 rounded-md px-2 py-1">
                          {state}
                        </span>
                      ))}
                    </FlexWrapper>
                  ),
                  default: 'contain',
                  description: 'The variant of the alert.',
                },
                {
                  id: '3',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      state
                    </span>
                  ),
                  type: (
                    <FlexWrapper items="center" gap={1}>
                      {['info', 'success', 'warning', 'danger'].map((state) => (
                        <span key={state} className="bg-primary-800 rounded-md px-2 py-1">
                          {state}
                        </span>
                      ))}
                    </FlexWrapper>
                  ),
                  default: 'info',
                  description: 'The state of the alert.',
                },
                {
                  id: '4',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      title
                    </span>
                  ),
                  type: 'string',
                  default: '',
                  description: 'The title of the alert.',
                },
                {
                  id: '5',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      message
                    </span>
                  ),
                  type: 'string',
                  default: '',
                  description: 'The message of the alert.',
                },
                {
                  id: '6',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      showClose
                    </span>
                  ),
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether to show the close button.',
                },
                {
                  id: '7',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      time
                    </span>
                  ),
                  type: 'number',
                  default: '',
                  description: 'Time in seconds to auto-close the alert.',
                },
                {
                  id: '8',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      repeat
                    </span>
                  ),
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether to repeat the alert.',
                },
                {
                  id: '9',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      loading
                    </span>
                  ),
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether to show loading state.',
                },
                {
                  id: '10',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      icon
                    </span>
                  ),
                  type: 'ReactNode',
                  default: '',
                  description: 'Custom icon for the alert.',
                },
                {
                  id: '11',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      hideIcon
                    </span>
                  ),
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether to hide the icon.',
                },
                {
                  id: '12',
                  property: (
                    <span className="bg-secondary-500 rounded-md px-2 py-1 font-semibold text-gray-800">
                      onClose
                    </span>
                  ),
                  type: '() => void',
                  default: '',
                  description: 'Callback function when the alert is closed.',
                },
              ]}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}
