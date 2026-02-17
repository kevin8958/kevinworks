'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { LuChevronRight } from 'react-icons/lu';
import { designSystemMenus } from '@/constants/common';

const SNB = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  const pathname = usePathname();

  return (
    <header
      className={
        'bg-neutral-990 scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-transparent fixed z-40 flex h-[100dvh] w-full overflow-y-auto pt-[60px] pr-0 sm:w-[260px] ' +
        (isOpen ? 'left-0' : '-left-full sm:left-0') +
        ' transition-left duration-300 ease-in-out'
      }
    >
      <nav className="w-full rounded-xl p-4">
        <ul className="flex flex-col pb-10">
          {designSystemMenus.map((menu) => {
            const isActiveMenu = menu.items?.some((item) => pathname === item.href);
            return (
              <li key={menu.id}>
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <div>
                      <DisclosureButton
                        className={classNames(
                          'flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium hover:bg-neutral-600/20',
                          { '!font-bold text-neutral-100': isActiveMenu },
                          { '!font-bold text-neutral-100/70': !isActiveMenu },
                        )}
                      >
                        <span>{menu.label}</span>
                        <LuChevronRight
                          className={classNames('size-5 transition-transform', {
                            'rotate-90': open,
                          })}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="flex flex-col">
                        {menu.items?.map((item) => {
                          const isActiveItem = pathname === item.href;

                          return (
                            <a
                              key={item.id}
                              href={item.href}
                              className={classNames(
                                'rounded-lg px-8 py-2 text-sm text-neutral-100/70 transition-all duration-100 ease-in-out hover:bg-neutral-600/20',
                                {
                                  '!text-primary-500 bg-neutral-600/20 font-bold': isActiveItem,
                                },
                              )}
                            >
                              {item.label}
                            </a>
                          );
                        })}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SNB;
