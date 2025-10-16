/* eslint-disable react/display-name */

'use client';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

const Button = React.forwardRef((props: Common.ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
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
    shape = 'rect',
    icon,
    iconPosition = 'left',
    onClick,
  } = props;

  const baseClasses =
    'flex items-center justify-center px-2 py-[6px] rounded-lg text-sm text-center font-normal transition-all duration-200 ease-in-out';

  const sizeClasses = {
    sm: 'h-[30px] text-xs w-max',
    md: 'h-[34px] text-sm',
    lg: 'h-[44px] !px-6 text-lg',
  };

  const getClearColorClasses = (buttonColor: Common.ButtonColor) => {
    const colors = {
      primary: 'text-primary-300',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    };
    return colors[buttonColor];
  };

  const getOutlineClasses = (buttonColor: Common.ButtonColor) => {
    const styles = {
      primary: 'border-primary-500 text-primary-300',
      info: 'border-info !text-info',
      success: 'border-success !text-success',
      warning: 'border-warning !text-warning',
      danger: 'border-danger !text-danger',
    };
    return styles[buttonColor];
  };

  const getContainClasses = (buttonColor: Common.ButtonColor) => {
    const styles = {
      primary:
        'bg-white hover:bg-primary-100 active:bg-primary-200 disabled:active:!bg-white disabled:hover:!bg-white text-gray-800',
      info: 'bg-info !text-gray-200',
      success: 'bg-success !text-gray-200',
      warning: 'bg-warning !text-gray-200',
      danger: 'bg-danger !text-gray-200',
    };
    return styles[buttonColor];
  };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={classNames(
        baseClasses,
        classes,
        sizeClasses[size],
        {
          'hover:bg-primary-800/30 active:bg-primary-600/30 disabled:!bg-transparent':
            variant === 'clear',
          'hover:bg-primary-800/30 active:bg-primary-600/30 border disabled:!bg-transparent':
            variant === 'outline',
        },
        variant === 'clear' && getClearColorClasses(color),
        variant === 'outline' && getOutlineClasses(color),
        variant === 'contain' && getContainClasses(color),
        disabled && 'cursor-not-allowed opacity-30',
        prompted && 'animate-flash-fast cursor-pointer',
        shape === 'circle' && 'aspect-square !rounded-full p-0',
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
          {icon && iconPosition === 'left' && <span className="mr-1">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-1">{icon}</span>}
        </>
      )}
    </button>
  );
});

export default Button;
