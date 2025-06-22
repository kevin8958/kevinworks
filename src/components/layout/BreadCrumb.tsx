'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';

const BreadCrumb = (props: Layout.BreadCrumbProps) => {
  const { items } = props;

  const pathname = usePathname();

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-1">
        {items.map((item, index) => {
          const isActive =
            pathname ===
            item.href;
          return (
            <li
              key={item.label}
              className={classNames(
                'text-sm flex items-center gap-1 font-normal',
                {
                  'text-secondary-300 font-bold': isActive,
                  'text-primary-400 ': !isActive,
                  'hover:text-gray-300': !isActive && item.href,
                },
              )}
            >
              {item.href ? (
                <Link href={item.href} className="underline underline-offset-4">
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
              {index < items.length - 1 && (
                <MdChevronRight className="text-primary-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
