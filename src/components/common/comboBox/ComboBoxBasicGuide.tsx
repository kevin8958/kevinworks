import React, { useState } from 'react';

import FlexWrapper from '@/components/layout/FlexWrapper';

import Box from '../Box';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import ComboBox from '../ComboBox';

const ComboBoxBasicGuide = () => {
  const [selectedView, setSelectedView] = useState<Common.ButtonGroupOption>({
    id: 'PREVIEW',
    value: 'Preview',
  });

  const viewOptions: Common.ButtonGroupOption[] = [
    { id: 'PREVIEW', value: 'Preview' },
    { id: 'CODE', value: 'Code' },
  ];

  const handleChangeView = (option: Common.ButtonGroupOption) => {
    setSelectedView(option);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const createButtonText = () => {
    return `<Button variant="text">TEXT</Button>`;
  };

  const exampleOption = [
    { id: 1, value: 'Durward Reynolds' },
    { id: 2, value: 'Kenton Towne' },
    { id: 3, value: 'Therese Wunsch' },
    { id: 4, value: 'Benedict Kessler' },
    { id: 5, value: 'Katelyn Rohan' },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-end">
        <ButtonGroup options={viewOptions} onChange={handleChangeView} value={selectedView} />
      </div>
      <Box id="textButtonExample" classes="w-full h-[200px]">
        {selectedView.id === 'PREVIEW' ? (
          <FlexWrapper classes="size-full !gap-1" items="center" direction="col">
            <div className="flex w-full flex-1 items-center">
              {/* example view start */}
              <div className="border-primary-700 flex size-full flex-1 items-center justify-center gap-4">
                <ComboBox options={exampleOption} />
              </div>
              {/* example view end */}
            </div>
          </FlexWrapper>
        ) : (
          <div className="text-primary-600 relative flex size-full items-center justify-center gap-4 p-10">
            <pre>
              <code className="!bg-transparent text-base">{createButtonText()}</code>
            </pre>
            <Button
              classes="!absolute right-6 top-4"
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(createButtonText())}
            >
              COPY
            </Button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default ComboBoxBasicGuide;
