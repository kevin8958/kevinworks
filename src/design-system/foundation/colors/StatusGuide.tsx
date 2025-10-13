import React from 'react';

import FlexWrapper from '@/design-system/layout/FlexWrapper';

import Typography from '@/design-system/foundation/Typography';

const StatusGuide = () => {
  const statusColors = {
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
    success: 'bg-success',
  };
  return (
    <FlexWrapper classes="size-full" direction="col" items="start">
      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Status</Typography>
        <Typography variant="B1">
          These colors are used to visually communicate the system's state, feedback, or user
          actions. They help users quickly understand the meaning or urgency of a message.
        </Typography>
        <FlexWrapper classes="w-full" items="start" direction="col" gap={2}>
          <Typography variant="B1" classes="!text-danger">
            Danger — Represents errors, failures, or destructive actions (e.g., deleting data,
            system errors).
          </Typography>
          <Typography variant="B1" classes="!text-warning">
            Warning — Signals caution or potential issues that require user attention but are not
            critical.
          </Typography>
          <Typography variant="B1" classes="!text-info">
            Info — Provides neutral or informational feedback to guide the user (e.g., updates,
            notifications).
          </Typography>
          <Typography variant="B1" classes="!text-success">
            Success — Indicates positive outcomes or successful operations (e.g., form submission,
            completed tasks).
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        items="start"
        justify="start"
        classes="bg-primary-900 p-10 w-max rounded-xl"
        gap={6}
      >
        {Object.entries(statusColors).map(([key, value]) => (
          <div key={key}>
            <FlexWrapper classes="!gap-3" items="center" direction="col">
              <span className={`size-10 ${value} rounded-md`} />
              <Typography variant="C1" color="secondary">
                {key}
              </Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default StatusGuide;
