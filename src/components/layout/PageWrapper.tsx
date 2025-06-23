'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

const PageWrapper = ({ children }: Layout.PageWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const topSentinel = useRef<HTMLDivElement>(null);
  const bottomSentinel = useRef<HTMLDivElement>(null);

  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root || !topSentinel.current || !bottomSentinel.current) return () => {};

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topSentinel.current) {
            // 위쪽 센티널이 안 보이면 ↑ 영역에 더 내용이 있으므로 그림자 ON
            setShowTopShadow(!entry.isIntersecting);
          } else {
            // 아래쪽 센티널이 안 보이면 ↓ 영역에 더 내용이 있으므로 그림자 ON
            setShowBottomShadow(!entry.isIntersecting);
          }
        });
      },
      { root, threshold: 1 },
    );

    io.observe(topSentinel.current);
    io.observe(bottomSentinel.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={scrollRef} className="relative flex w-full flex-col items-center overflow-y-auto">
      {/* 위쪽 센티널 */}
      <div ref={topSentinel} className="h-px w-full" />

      {children}

      {/* 아래쪽 센티널 */}
      <div ref={bottomSentinel} className="h-px w-full" />

      {/* ⇡ 위 그림자 */}
      <div
        className={classNames(
          'pointer-events-none fixed top-[80px] left-[260px] z-[4] h-[60px] w-[1400px]',
          'from-primary-900 bg-gradient-to-b to-transparent',
          'transition-opacity duration-300',
          showTopShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* ⇣ 아래 그림자 */}
      <div
        className={classNames(
          'pointer-events-none fixed bottom-0 left-[260px] z-[4] h-[60px] w-[1400px]',
          'to-primary-900 bg-gradient-to-b from-transparent',
          'transition-opacity duration-300',
          showBottomShadow ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  );
};

export default PageWrapper;
