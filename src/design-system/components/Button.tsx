/* eslint-disable react/display-name */

'use client';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const baseClasses =
  'inline-flex items-center justify-center rounded-lg text-center font-medium transition-all duration-200 ease-in-out select-none outline-none disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.97]';

const sizeClasses: Record<Common.ButtonSize, string> = {
  sm: 'h-[30px] px-2.5 text-xs gap-1.5',
  md: 'h-[36px] px-4 text-sm gap-2',
  lg: 'h-[44px] px-6 text-base gap-2.5',
};

const variantColorClasses: Record<
  Common.ButtonVariant,
  Record<Common.ButtonColor, string>
> = {
  contain: {
    primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200 active:bg-primary-200',
    neutral: 'bg-neutral-800 text-white hover:bg-neutral-700 active:bg-neutral-700',
    info: 'bg-info text-white hover:opacity-90',
    success: 'bg-success text-white hover:opacity-90',
    warning: 'bg-warning text-white hover:opacity-90',
    danger: 'bg-danger text-white hover:opacity-90',
  },
  outline: {
    primary: 'border border-primary-500 text-primary-300 hover:bg-primary-800/20',
    neutral: 'border border-neutral-500 text-neutral-100 hover:bg-neutral-800/60',
    info: 'border border-info text-info hover:bg-info/10',
    success: 'border border-success text-success hover:bg-success/10',
    warning: 'border border-warning text-warning hover:bg-warning/10',
    danger: 'border border-danger text-danger hover:bg-danger/10',
  },
  clear: {
    primary: 'text-primary-300 hover:bg-primary-800/20',
    neutral: 'text-neutral-100 hover:bg-neutral-800/60',
    info: 'text-info hover:bg-info/10',
    success: 'text-success hover:bg-success/10',
    warning: 'text-warning hover:bg-warning/10',
    danger: 'text-danger hover:bg-danger/10',
  },
};

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Common.ButtonProps
>((props, ref) => {
  const {
    classes,
    className,
    type = 'button',
    children = null,
    size = 'md',
    variant = 'contain',
    color = 'primary',
    disabled = false,
    loading = false,
    prompted = false,
    shape = 'rect',
    justify = 'center',
    fullWidth = false,
    icon,
    href,
    target,
    rel,
    iconPosition = 'left',
    onClick,
    ...rest
  } = props;

  const resolvedIcon = href && !icon ? <LuArrowUpRight className="text-[1.05em]" /> : icon;
  const resolvedIconPosition = href && !icon ? 'right' : iconPosition;

  const resolvedClasses = classNames(
    baseClasses,
    sizeClasses[size],
    variantColorClasses[variant][color],
    shape === 'circle' && 'aspect-square !rounded-full !p-0',
    fullWidth && 'w-full',
    prompted && 'animate-flash-fast',
    disabled && 'pointer-events-none',
    classes || className,
  );

  const content = (
    <AnimatePresence mode="wait" initial={false}>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex items-center justify-center"
        >
          <svg className="size-4 animate-spin text-current" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classNames(
            'flex w-full items-center gap-[inherit]',
            justify === 'start' ? 'justify-start text-left' : 'justify-center',
          )}
        >
          {resolvedIcon && resolvedIconPosition === 'left' && (
            <span className="flex shrink-0">{resolvedIcon}</span>
          )}
          {children}
          {resolvedIcon && resolvedIconPosition === 'right' && (
            <span className="flex shrink-0">{resolvedIcon}</span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (href) {
    return (
      <motion.a
        {...rest}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={resolvedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={resolvedClasses}
    >
      {content}
    </motion.button>
  );
});

export default Button;
