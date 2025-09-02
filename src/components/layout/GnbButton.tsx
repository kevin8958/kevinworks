// components/NavLink.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const GnbButton = ({ href, children }: Layout.GnbButtonProps) => {
  const pathname = usePathname();

  const isActive = (href !== '/' && pathname.includes(href)) || (href === '/' && pathname === '/');

  return (
    <Link
      href={href}
      className={clsx(
        'group relative px-2 py-1 text-white transition-colors',
        isActive ? 'font-semibold !text-[#50b4ff]' : 'opacity-80 hover:opacity-100',
      )}
    >
      <span className="relative z-10 text-xs">{children}</span>
      <span
        className={clsx(
          'absolute bottom-0 left-1/2 h-[2px] w-0 origin-center bg-white transition-all duration-300 ease-in-out',
          'group-hover:w-[calc(100%-16px)]',
          isActive && 'w-[calc(100%-16px)] -translate-x-1/2 !bg-[#50b4ff]',
          !isActive && 'group-hover:-translate-x-1/2',
        )}
      ></span>
    </Link>
  );
};

export default GnbButton;
