import '@/styles/globals.css';
import '@/styles/datepicker.override.css';

import type { Metadata } from 'next';

import Gnb from '@/components/layout/Gnb';
import PageWrapper from '@/components/layout/PageWrapper';
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

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
