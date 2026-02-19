'use client';

import React, { useState } from 'react';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Typography from '@/design-system/foundation/Typography';
import UploadDropzone from '@/design-system/components/UploadDropzone';

const UploadVariantGuide = () => {
  const [basicFiles, setBasicFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  return (
    <FlexWrapper classes="w-full lg:flex-row gap-8" direction="col" items="start">
      {/* Description Side */}
      <FlexWrapper classes="w-full lg:w-1/3" items="start" direction="col" gap={2}>
        <Typography variant="H3">Usage Examples</Typography>
        <Typography variant="B1">
          UploadDropzone provides an intuitive interface for selecting files via drag-and-drop or
          file browsing. It includes built-in validation for file size and types.
        </Typography>
      </FlexWrapper>

      {/* Preview Side */}
      <FlexWrapper
        classes="w-full flex-1 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        gap={10}
        direction="col"
        items="start"
      >
        {/* Case 1: Default */}
        <div className="w-full space-y-4">
          <Typography variant="C1" color="primary" classes="uppercase tracking-wider">
            Default (All Files, Max 10MB)
          </Typography>
          <UploadDropzone onSelect={(files) => setBasicFiles(files)} />
        </div>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default UploadVariantGuide;
