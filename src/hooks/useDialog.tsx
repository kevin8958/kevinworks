'use client';

import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Button from '@/design-system/components/Button';

import { Dialog, Transition } from '@headlessui/react';
import {
  Fragment,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

const DialogContext = createContext<Common.DialogContextValue | null>(null);

export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('useDialog must be used inside <DialogProvider>');
  return ctx;
}

const PANEL_BORDER: Record<Common.DialogState, string> = {
  info: 'border-info border',
  success: 'border-success border',
  warning: 'border-warning border',
  danger: 'border-danger border',
  default: 'border-primary-600 border',
};

const CONFIRM_BTN: Record<Common.DialogState, string> = {
  info: 'bg-info hover:bg-info/90',
  success: 'bg-success hover:bg-success/90',
  warning: 'bg-warning hover:bg-warning/90',
  danger: 'bg-danger hover:bg-danger/90',
  default: '',
};

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Common.DialogProps | null>(null);
  const resolver = useRef<((value: boolean) => void) | null>(null);

  const close = useCallback((value: boolean = false) => {
    setIsOpen(false);
    resolver.current?.(value);
  }, []);

  const openDialog = useCallback(
    ({
      title,
      message,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      placement = 'center',
      state,
    }: Common.DialogProps) => {
      setOptions({
        title,
        message,
        confirmText,
        cancelText,
        placement,
        state,
      });
      setIsOpen(true);
      return new Promise<boolean>((resolve) => {
        resolver.current = resolve;
      });
    },
    [],
  );

  const placement = options?.placement ?? 'center';
  const items: 'start' | 'center' | 'end' =
    placement === 'top' ? 'start' : placement === 'bottom' ? 'end' : 'center';

  const hideCancel =
    options?.state === 'info' || options?.state === 'success' || options?.cancelText === '';

  return (
    <DialogContext.Provider value={{ openDialog, close }}>
      {children}

      {/* 모달 */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={() => close(false)}>
          {/* overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
          </Transition.Child>

          <FlexWrapper classes="fixed inset-0 p-10" justify="center" items={items}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  'bg-primary-900 w-full max-w-md rounded-xl p-6 shadow-xl',
                  PANEL_BORDER[options?.state || 'default'],
                )}
              >
                <div className="space-y-4">
                  {options?.title && (
                    <Dialog.Title className="text-lg font-medium text-white">
                      {options.title}
                    </Dialog.Title>
                  )}
                  <p className="text-sm whitespace-pre-line text-gray-300">{options?.message}</p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  {!hideCancel && (
                    <Button variant="outline" classes="min-w-[80px]" onClick={() => close(false)}>
                      {options?.cancelText ?? 'Cancel'}
                    </Button>
                  )}
                  <Button
                    variant="contain"
                    classes={classNames(
                      'min-w-[80px]',
                      options?.state && CONFIRM_BTN[options.state],
                    )}
                    color={options?.state === 'default' ? 'primary' : options?.state}
                    onClick={() => close(true)}
                  >
                    {options?.confirmText ?? 'Confirm'}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </FlexWrapper>
        </Dialog>
      </Transition>
    </DialogContext.Provider>
  );
}
