import classNames from 'classnames';
import React from 'react';

const Typography = (props: Common.TypographyProps) => {
  const { classes, variant, color = 'primary', children } = props;

  return (
    <>
      {(() => {
        switch (variant) {
          case 'h2':
            return (
              <h2
                className={classNames(
                  `text-[60px] font-bold  transition-all duration-200 ease-in-out tracking-wide ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </h2>
            );
          case 'h3':
            return (
              <h3
                className={classNames(
                  `text-2xl font-bold transition-all duration-200 ease-in-out tracking-wide ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </h3>
            );
          case 'h4':
            return (
              <h3
                className={classNames(
                  `text-lg font-normal transition-all duration-200 ease-in-out tracking-wide ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </h3>
            );
          case 'display1':
            return (
              <p
                className={classNames(
                  `text-4xl transition-all duration-200 ease-in-out ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </p>
            );
          case 'display2':
            return (
              <p
                className={classNames(
                  `text-2xl transition-all duration-200 ease-in-out ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </p>
            );
          case 'body1':
            return (
              <p
                className={classNames(
                  `text-base transition-all duration-200 ease-in-out ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </p>
            );
          case 'body2':
            return (
              <p
                className={classNames(
                  `text-sm transition-all duration-200 ease-in-out ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </p>
            );
          case 'caption':
            return (
              <p
                className={classNames(
                  `text-xs transition-all duration-200 ease-in-out ${classes}`,
                  {
                    'text-primary-200 ': color === 'primary',
                    'text-secondary-400': color === 'secondary',
                  },
                )}
              >
                {children}
              </p>
            );
          default:
            return <p>Invalid level</p>;
        }
      })()}
    </>
  );
};

export default Typography;
