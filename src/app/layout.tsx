import './globals.css';

import type { Metadata } from 'next';

import Gnb from '@/components/layout/Gnb';
import PageWrapper from '@/components/layout/PageWrapper';
import Snb from '@/components/layout/Snb';
import { DialogProvider } from '@/hooks/useDialog';

export const metadata: Metadata = {
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html className="bg-primary-900 font-pretendard size-full transition-all duration-200 ease-in-out">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/pretendard.css"
        />
      </head>
      <body
        className="text-textPrimary relative flex size-full justify-center"
        suppressHydrationWarning
      >
        <DialogProvider>
          <PageWrapper>
            <Gnb />
            <div className="relative m-auto h-full w-[1400px] pt-[80px]">
              <Snb />
              <div className="relative w-full pl-[260px]">{props.children}</div>
            </div>
          </PageWrapper>
        </DialogProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
