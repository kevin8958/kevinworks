import classNames from 'classnames';
import React from 'react';

const tagMap = {
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  display1: 'p',
  display2: 'p',
  body1: 'p',
  body2: 'p',
  caption: 'p',
} as const;

const baseStyles: Record<string, string> = {
  h2: 'text-[60px] md:text-[70px] leading-[1.2] font-extrabold',
  h3: 'text-2xl font-bold',
  h4: 'text-lg md:text-xl font-normal',
  display1: 'text-4xl',
  display2: 'text-2xl',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};

const Typography = (props: Common.TypographyProps) => {
  const { classes = '', variant, color = 'primary', children } = props;

  const Tag = tagMap[variant];
  if (!Tag) return <p>Invalid variant</p>;

  return (
    <Tag
      className={classNames(
        baseStyles[variant],
        'tracking-wide transition-all duration-200 ease-in-out',
        {
          'text-primary-100': color === 'primary',
          'text-secondary-400': color === 'secondary',
        },
        classes,
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
