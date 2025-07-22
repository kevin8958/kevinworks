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
          id: 'splitText',
          label: 'Split Text',
          href: '/components/interaction/splitText',
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
        { id: 'badge', label: 'Badge', href: '/components/common/badge' },
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
        { id: 'datePicker', label: 'DatePicker', href: '/components/common/datepicker' },
        { id: 'dialog', label: 'Dialog', href: '/components/common/dialog' },
        { id: 'drawer', label: 'Drawer', href: '/components/common/drawer' },
        { id: 'dropdown', label: 'Dropdown', href: '/components/common/dropdown' },
        // { id: 'icon', label: 'Icon', href: '/components/common/icon' },
        // { id: 'image', label: 'Image', href: '/components/common/image' },
        // { id: 'input', label: 'Input', href: '/components/common/input' },
        // { id: 'link', label: 'Link', href: '/components/common/link' },
        // { id: 'loading', label: 'Loading', href: '/components/common/loading' },
        // { id: 'pagination', label: 'Pagination', href: '/components/common/pagination' },
        // { id: 'radioButton', label: 'RadioButton', href: '/components/common/radioButton' },
        // { id: 'select', label: 'Select', href: '/components/common/select' },
        // { id: 'skeleton', label: 'Skeleton', href: '/components/common/skeleton' },
        // { id: 'slider', label: 'Slider', href: '/components/common/slider' },
        // { id: 'switch', label: 'Switch', href: '/components/common/switch' },
        // { id: 'table', label: 'Table', href: '/components/common/table' },
        // { id: 'tabs', label: 'Tabs', href: '/components/common/tabs' },
        // { id: 'tag', label: 'Tag', href: '/components/common/tag' },
        // { id: 'toast', label: 'Toast', href: '/components/common/toast' },
        // { id: 'tooltip', label: 'Tooltip', href: '/components/common/tooltip' },
        // { id: 'tree', label: 'Tree', href: '/components/common/tree' },
        // { id: 'upload', label: 'Upload', href: '/components/common/upload' },
        // { id: 'video', label: 'Video', href: '/components/common/video' },
        // { id: 'carousel', label: 'Carousel', href: '/components/common/carousel' },
        // { id: 'colorPicker', label: 'ColorPicker', href: '/components/common/colorPicker' },
        // { id: 'fileInput', label: 'FileInput', href: '/components/common/fileInput' },
        // { id: 'linkButton', label: 'LinkButton', href: '/components/common/linkButton' },
        { id: 'progress', label: 'Progress', href: '/components/common/progress' },
        { id: 'textInput', label: 'TextInput', href: '/components/common/textInput' },
        {
          id: 'typography',
          label: 'Typography',
          href: '/components/common/typography',
        },
      ],
    },
    // {
    //   id: 'layout',
    //   label: 'Layout',
    //   href: null,
    //   items: [
    //     {
    //       id: 'snb',
    //       label: 'Side Navigation Bar',
    //       href: '/components/layout/snb',
    //     },
    //     {
    //       id: 'gnb',
    //       label: 'Global Navigation Bar',
    //       href: '/components/layout/gnb',
    //     },
    //   ],
    // },
  ];

  return (
    <header className="bg-primary-900 fixed z-50 flex h-[calc(100dvh-60px)] overflow-y-auto pr-0">
      <nav className="w-[260px] rounded-xl p-4">
        <ul className="flex flex-col pb-10">
          {componentsMenus.map((menu) => {
            const isActiveMenu = menu.items?.some((item) => pathname === item.href);
            return (
              <li key={menu.id}>
                <Disclosure defaultOpen={true}>
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
