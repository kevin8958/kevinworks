import '@/styles/globals.css';
import '@/styles/datepicker.override.css';

import type { Metadata } from 'next';

import Gnb from '@/design-system/layout/Gnb';
import PageWrapper from '@/design-system/layout/PageWrapper';
import { DialogProvider } from '@/hooks/useDialog';

export const metadata: Metadata = {
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html className="bg-primary-990 font-pretendard size-full transition-all duration-200 ease-in-out">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.6/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body
        className="text-textPrimary relative flex size-full justify-center"
        suppressHydrationWarning
      >
        <DialogProvider>
          <Gnb />
          {props.children}
        </DialogProvider>
        <div id="datepicker-portal"></div>
      </body>
    </html>
  );
}
