'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { LuChevronRight } from 'react-icons/lu';

const SNB = () => {
  const pathname = usePathname();

  const componentsMenus = [
    {
      id: 'interaction',
      label: 'Interaction',
      href: null,
      items: [
        {
          id: 'snb',
          label: 'Side Navigation Bar',
          href: '/components/layout/snb',
        },
        {
          id: 'gnb',
          label: 'Global Navigation Bar',
          href: '/components/layout/gnb',
        },
      ],
    },
    {
      id: 'common',
      label: 'Common',
      href: null,
      items: [
        { id: 'alert', label: 'Alert', href: '/components/common/alert' },
        { id: 'avatar', label: 'Avatar', href: '/components/common/avatar' },
        { id: 'button', label: 'Button', href: '/components/common/button' },
        {
          id: 'buttonGroup',
          label: 'ButtonGroup',
          href: '/components/common/buttonGroup',
        },
        {
          id: 'checkbox',
          label: 'Checkbox',
          href: '/components/common/checkbox',
        },
        {
          id: 'comboBox',
          label: 'ComboBox',
          href: '/components/common/comboBox',
        },
        { id: 'dialog', label: 'Dialog', href: '/components/common/dialog' },
        { id: 'menu', label: 'Menu', href: '/components/common/menu' },
        {
          id: 'typography',
          label: 'Typography',
          href: '/components/common/typography',
        },
      ],
    },
    {
      id: 'layout',
      label: 'Layout',
      href: null,
      items: [
        {
          id: 'snb',
          label: 'Side Navigation Bar',
          href: '/components/layout/snb',
        },
        {
          id: 'gnb',
          label: 'Global Navigation Bar',
          href: '/components/layout/gnb',
        },
      ],
    },
  ];

  return (
    <header className="fixed z-50 flex h-dvh pr-0">
      <nav className="w-[260px] rounded-xl p-4">
        <ul className="flex flex-col">
          {componentsMenus.map((menu) => {
            const isActiveMenu = menu.items?.some((item) => pathname === item.href);
            return (
              <li key={menu.id}>
                <Disclosure defaultOpen={isActiveMenu}>
                  {({ open }) => (
                    <div>
                      <DisclosureButton
                        className={classNames(
                          'hover:bg-primary-600/20 flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium',
                          { 'text-primary-100 !font-bold': isActiveMenu },
                          { 'text-primary-100/70 !font-bold': !isActiveMenu },
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
                                'text-primary-100/70 hover:bg-primary-600/20 rounded-lg px-8 py-2 text-sm transition-all duration-100 ease-in-out',
                                {
                                  '!text-secondary-500 bg-primary-600/20 font-bold': isActiveItem,
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
