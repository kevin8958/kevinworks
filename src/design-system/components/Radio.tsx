'use client';

import classNames from 'classnames';
import React from 'react';
import FlexWrapper from '../layout/FlexWrapper';

const Radio = (props: Common.RadioProps) => {
  const { title, options, value, onChange, classes } = props;

  return (
    <FlexWrapper classes="w-full" gap={2} direction="col">
      {title && <p className="mb-1 text-lg font-bold text-white">{title}</p>}

      {options.map((option) => {
        const isSelected = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={classNames(
              'flex w-full items-start gap-3 rounded-xl border border-neutral-700 bg-neutral-900 p-4 text-left transition-all duration-200 hover:border-neutral-500 focus:outline-none',
              { 'ring-2 ring-neutral-500': isSelected },
            )}
          >
            {/* Radio Circle */}
            <span
              className={classNames(
                'mt-[3px] flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200',
                isSelected ? 'border-neutral-400' : 'border-neutral-400',
              )}
            >
              {isSelected && <span className="size-2.5 rounded-full bg-neutral-400" />}
            </span>

            {/* Label + Desc */}
            <div className="flex flex-col">
              <p
                className={classNames(
                  'font-medium',
                  isSelected ? 'text-white' : 'text-neutral-200',
                )}
              >
                {option.label}
              </p>
              {option.desc && <p className="text-sm text-neutral-400">{option.desc}</p>}
            </div>
          </button>
        );
      })}
    </FlexWrapper>
  );
};

export default Radio;
