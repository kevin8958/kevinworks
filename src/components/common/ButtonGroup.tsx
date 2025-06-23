'use client';

import classNames from 'classnames';
import React from 'react';

import FlexWrapper from '../layout/FlexWrapper';

const ButtonGroup = (props: Common.ButtonGroupProps) => {
  const { title, classes, size = 'md', value, options, onChange } = props;

  const sizeClasses = {
    sm: 'h-[30px] text-xs w-max',
    md: 'h-[34px] text-sm',
    lg: 'h-[44px] !px-6 text-lg',
  };

  return (
    <FlexWrapper items="center" justify="center" gap={2}>
      {title && <p className="font-bold">{title}</p>}
      <FlexWrapper
        classes={classNames('shrink-0 rounded-lg p-1 shadow-custom-dark bg-primary-800', classes)}
        items="center"
        justify="center"
        gap={2}
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={classNames(
              'text-primary-300 rounded-md !border-0 !px-2 !py-[4px] !text-sm transition-all duration-200 ease-in-out',
              { 'bg-primary-900': value.id === option.id },
              sizeClasses[size],
            )}
            onClick={() => onChange && onChange(option)}
          >
            {option.value}
          </button>
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonGroup;
