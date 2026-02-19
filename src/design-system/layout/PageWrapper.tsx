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

  // --- 1. 스크롤 복원 및 저장 로직 ---
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    // [복원] 페이지가 바뀌거나 컴포넌트가 로드될 때 실행
    const savedPos = sessionStorage.getItem(`scrollPos-${pathname}`);
    if (savedPos) {
      // 콘텐츠가 그려질 시간을 주기 위해 requestAnimationFrame 사용
      requestAnimationFrame(() => {
        root.scrollTo(0, parseInt(savedPos));
      });
    }

    // [저장] 스크롤할 때마다 위치를 기억 (디바운싱을 주면 더 좋지만 일단 직관적으로 구현)
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPos-${pathname}`, root.scrollTop.toString());
    };

    root.addEventListener('scroll', handleScroll);
    return () => root.removeEventListener('scroll', handleScroll);
  }, [pathname]); // 경로가 바뀔 때마다 해당 경로의 위치를 복원/저장

  // --- 2. 기존 그림자 감지 로직 (IntersectionObserver) ---
  useEffect(() => {
    const root = scrollRef.current;
    if (!root || !topSentinel.current || !bottomSentinel.current) return () => {};

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
        root,
        threshold: 0.1,
      },
    );

    io.observe(topSentinel.current);
    io.observe(bottomSentinel.current);

    return () => io.disconnect();
  }, []); // 의존성 배열을 비워두어 mount/unmount 시에만 설정

  return (
    <div ref={scrollRef} className="relative flex h-screen w-full flex-col overflow-y-auto">
      {/* 센티넬 (그림자 감지용) */}
      <div ref={topSentinel} className="h-px w-full shrink-0" />

      {/* 실제 콘텐츠 영역 */}
      <div className="w-full grow">{children}</div>

      <div ref={bottomSentinel} className="h-4 w-full shrink-0" />

      {/* ⇡ 위 그림자 (PageWrapper가 스크롤 주체이므로 fixed 대신 absolute가 나을 수 있음) */}
      <div
        className={classNames(
          'pointer-events-none absolute top-0 left-0 z-40 h-[120px] w-full',
          'from-neutral-990 bg-gradient-to-b to-transparent',
          'transition-opacity duration-700',
          showTopShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* ⇣ 아래 그림자 */}
      <div
        className={classNames(
          'pointer-events-none absolute bottom-0 left-0 z-40 h-[100px] w-full',
          'to-neutral-990 bg-gradient-to-b from-transparent',
          'transition-opacity duration-300',
          showBottomShadow ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  );
};

export default PageWrapper;
