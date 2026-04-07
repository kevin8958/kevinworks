'use client';

import { KEVIN_DESIGN_SYSTEM_URL } from '@/constants/externalLinks';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumb = (props: Layout.BreadCrumbProps) => {
  const { items } = props;

  const pathname = usePathname();

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-1">
        {items.map((item, index) => {
          const resolvedHref = item.href === '/design-system' ? KEVIN_DESIGN_SYSTEM_URL : item.href;
          const isExternal = resolvedHref?.startsWith('http');
          const isActive = !isExternal && pathname === resolvedHref;
          return (
            <li
              key={item.label}
              className={classNames('flex items-center gap-1 text-sm font-semibold', {
                'text-primary-300 !font-bold': isActive,
                'text-neutral-200': !isActive,
                'hover:text-neutral-300': !isActive && item.href,
              })}
            >
              {resolvedHref ? (
                isExternal ? (
                  <a href={resolvedHref} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={resolvedHref}>{item.label}</Link>
                )
              ) : (
                item.label
              )}
              {index < items.length - 1 && <FaChevronRight className="text-xs text-neutral-200" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
