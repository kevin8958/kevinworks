'use client';

import classNames from 'classnames';
import React from 'react';

const SimpleTable = (props: Common.SimpleTableProps) => {
  const { columns = [], data = [] } = props;

  return (
    <div className="bg-neutral-990/50 w-full overflow-hidden rounded-xl border border-neutral-800 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 font-semibold text-neutral-400 first:pl-8 last:pr-8"
                >
                  <span className="flex items-center gap-2">{col.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/50">
            {data.map((item) => (
              <tr key={item.id} className="group transition-colors hover:bg-neutral-800/30">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={classNames('px-6 py-4 first:pl-8 last:pr-8', {
                      'min-w-[320px]': col.key === 'description',
                    })}
                  >
                    {/* 1. Property: 속성명 강조 */}
                    {col.key === 'property' ? (
                      <span className="font-mono text-[14px] font-bold tracking-tight text-neutral-50">
                        {item[col.key]}
                      </span>
                    ) : col.key === 'type' ? (
                      /* 2. Type: Union Type(배열) 처리 강화 */
                      <div className="flex flex-wrap items-center gap-1.5 font-mono">
                        {Array.isArray(item[col.key]) ? (
                          item[col.key].map((t: string, i: number) => (
                            <React.Fragment key={i}>
                              <code className="text-secondary-300 rounded-md border border-neutral-700 bg-neutral-700 px-1.5 py-0.5 text-[12px]">
                                {t}
                              </code>
                              {/* 배열의 마지막이 아니면 파이프 표시 */}
                              {i < item[col.key].length - 1 && (
                                <span className="text-[10px] font-light text-neutral-600">|</span>
                              )}
                            </React.Fragment>
                          ))
                        ) : (
                          <code className="text-secondary-300 rounded-md border border-neutral-700 bg-neutral-800/50 px-1.5 py-0.5 text-[12px]">
                            {item[col.key]}
                          </code>
                        )}
                      </div>
                    ) : col.key === 'default' ? (
                      /* 3. Default: 기본값은 조금 더 차분한 색상으로 */
                      <code className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-[12px] text-neutral-400">
                        {item[col.key] || '-'}
                      </code>
                    ) : (
                      /* 4. Description: 설명 텍스트 */
                      <span className="text-[13px] leading-relaxed text-neutral-400">
                        {item[col.key]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;
