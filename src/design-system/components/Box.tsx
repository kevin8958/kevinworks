import classNames from 'classnames';
import React from 'react';

const Box = (props: Common.BoxProps) => {
  const { id, classes = '', type = 'default', title, maxWidth, children = null } = props;
  return (
    <div
      id={id}
      className={classNames(
        'w-full overflow-hidden rounded-xl border border-neutral-500/30 text-neutral-600',
        {
          'flex flex-col': title,
          'shadow-custom-light': type === 'card',
        },
      )}
      style={
        {
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        } as React.CSSProperties
      }
    >
      {title && (
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )}
      <div className={classNames('p-4', classes)}>{children}</div>
    </div>
  );
};

export default Box;
