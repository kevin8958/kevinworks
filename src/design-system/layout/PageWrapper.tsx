'use client';

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const PageWrapper = ({ children }: Layout.PageWrapperProps) => {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const topSentinel = useRef<HTMLDivElement>(null);
  const bottomSentinel = useRef<HTMLDivElement>(null);

  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  // 1. 스크롤 복원 및 저장
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const savedPos = sessionStorage.getItem(`scrollPos-${pathname}`);
    if (savedPos) {
      requestAnimationFrame(() => {
        root.scrollTo(0, parseInt(savedPos));
      });
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scrollPos-${pathname}`, root.scrollTop.toString());
    };

    root.addEventListener('scroll', handleScroll);
    return () => root.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 2. 그림자 감지 (IntersectionObserver)
  useEffect(() => {
    const root = scrollRef.current;
    if (!root || !topSentinel.current || !bottomSentinel.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topSentinel.current) {
            setShowTopShadow(!entry.isIntersecting);
          }
          if (entry.target === bottomSentinel.current) {
            setShowBottomShadow(!entry.isIntersecting);
          }
        });
      },
      {
        root, // 스크롤 박스를 기준으로 감지
        threshold: 0,
      },
    );

    io.observe(topSentinel.current);
    io.observe(bottomSentinel.current);

    return () => io.disconnect();
  }, []);

  return (
    /* 최상위 컨테이너: 스크롤되지 않고 화면에 고정됨 */
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      {/* 실제 스크롤이 발생하는 영역 */}
      <div ref={scrollRef} className="scrollbar-hide relative w-full flex-1 overflow-y-auto">
        {/* 상단 감지 포인트 */}
        <div ref={topSentinel} className="h-px w-full shrink-0" />

        {/* 실제 콘텐츠 */}
        <div className="min-h-full w-full">{children}</div>

        {/* 하단 감지 포인트 */}
        <div ref={bottomSentinel} className="h-px w-full shrink-0" />
      </div>

      {/* ⇡ 상단 고정 그림자: scrollRef 밖에서 absolute로 배치해야 고정됨 */}
      <div
        className={classNames(
          'pointer-events-none absolute top-0 left-0 z-40 h-[100px] w-full',
          'from-neutral-990 bg-gradient-to-b to-transparent transition-opacity duration-500',
          showTopShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* ⇣ 하단 고정 그림자 */}
      <div
        className={classNames(
          'pointer-events-none absolute bottom-0 left-0 z-40 h-[100px] w-full',
          'from-neutral-990 bg-gradient-to-t to-transparent transition-opacity duration-500',
          showBottomShadow ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  );
};

export default PageWrapper;
