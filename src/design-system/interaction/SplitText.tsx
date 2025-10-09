'use client';

import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

const baseStyles: Record<string, string> = {
  h2: 'text-[60px] font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-lg font-normal',
  display1: 'text-4xl',
  display2: 'text-2xl',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};

const SimpleSplitText: React.FC<Interaction.SplitTextProps> = ({
  text,
  classes = '',
  variant = 'body1',
  delay = 40,
  repeat = false,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!repeat) return;

    const interval = setInterval(
      () => {
        setCycle((prev) => prev + 1); // 트리거를 위해 상태 변경
      },
      text.length * delay + 1000,
    ); // 전체 애니메이션 길이 + 약간의 쉬는 시간

    return () => clearInterval(interval);
  }, [repeat, text, delay]);

  useEffect(() => {
    if (!repeat) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCycle((prev) => prev + 1);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [repeat]);

  return (
    <p
      key={cycle} // 상태 변화에 따라 리렌더 → 애니메이션 재시작
      ref={ref}
      className={classNames(
        baseStyles[variant],
        'text-primary-100 inline-block break-words whitespace-pre-wrap',
        classes,
      )}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={classNames(
            'inline-block transform transition duration-500 ease-out',
            'translate-y-4 opacity-0',
          )}
          style={{
            animation: `fadeUp 0.5s ease-out forwards`,
            animationDelay: `${i * delay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </p>
  );
};

export default SimpleSplitText;
