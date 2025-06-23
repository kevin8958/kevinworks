/* eslint-disable react/display-name */

'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

const Button = React.forwardRef((props: Common.ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    id = '',
    classes = '',
    type = 'button',
    children = null,
    size = 'md',
    variant = 'contain',
    color = 'primary',
    /** state start */
    disabled = false,
    loading = false,
    prompted = false,
    /** state end */
    icon,
    iconPosition = 'left',
    onClick,
  } = props;

  const baseClasses =
    'flex items-center justify-center px-4 py-[6px] rounded-lg text-sm text-center font-normal transition-all duration-200 ease-in-out';

  const sizeClasses = {
    sm: 'h-[30px] text-xs w-max',
    md: 'h-[34px] text-sm',
    lg: 'h-[44px] !px-6 text-lg',
  };

  const getClearColorClasses = (buttonColor: Common.ButtonColor) => {
    const colors = {
      primary: 'text-primary-300',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-error',
    };
    return colors[buttonColor];
  };

  const getOutlineClasses = (buttonColor: Common.ButtonColor) => {
    const styles = {
      primary: 'border-primary-700 text-primary-300',
      success: 'border-success !text-success',
      warning: 'border-warning !text-warning',
      danger: 'border-error !text-error',
    };
    return styles[buttonColor];
  };

  const getContainClasses = (buttonColor: Common.ButtonColor) => {
    const styles = {
      primary:
        'bg-primary-700 hover:bg-primary-500 active:bg-primary-600 disabled:active:!bg-primary-700 disabled:hover:!bg-primary-700 text-primary-100',
      success: 'bg-success !text-gray-200',
      warning: 'bg-warning !text-gray-200',
      danger: 'bg-error !text-gray-200',
    };
    return styles[buttonColor];
  };

  return (
    <button
      id={id}
      type={type === 'button' ? 'button' : 'submit'}
      className={classNames(
        baseClasses,
        classes,
        sizeClasses[size],
        {
          'hover:bg-primary-800 active:bg-primary-600 disabled:!bg-transparent':
            variant === 'clear',
          'hover:bg-primary-800 active:bg-primary-600 border disabled:!bg-transparent':
            variant === 'outline',
          'shadow-custom-dark': variant === 'contain',
        },
        variant === 'clear' && getClearColorClasses(color),
        variant === 'outline' && getOutlineClasses(color),
        variant === 'contain' && getContainClasses(color),
        disabled && 'cursor-not-allowed opacity-30',
        prompted && 'animate-flash-fast',
      )}
      disabled={disabled}
      ref={ref}
      onClick={onClick}
    >
      {loading ? (
        <motion.div
          className="border-primary-400 size-4 rounded-full border-[3px] border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 1,
          }}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </>
      )}
    </button>
  );
});

export default Button;
