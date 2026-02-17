'use client';

import classNames from 'classnames';

const SimpleTable = (props: Common.SimpleTableProps) => {
  const { columns = [], data = [] } = props;
  return (
    <div className="mx-auto w-full overflow-x-scroll rounded-lg border border-neutral-500 shadow-md">
      <table className="w-full table-auto text-left text-sm">
        <thead className="bg-neutral-700/30">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="text-primary-500 cursor-pointer p-4 font-normal">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t border-neutral-500">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={classNames('px-4 py-2 text-neutral-100', {
                    'min-w-[400px]': col.key === 'description',
                  })}
                >
                  {item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SimpleTable;
