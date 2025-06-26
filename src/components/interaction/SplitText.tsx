'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import classNames from 'classnames';

gsap.registerPlugin(GSAPSplitText);

const SplitText = (props: Interaction.SplitTextProps) => {
  const {
    classes = '',
    color = 'primary',
    variant,
    text,
    delay = 100,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    repeat = false,
    onLetterAnimationComplete,
  } = props;

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const absoluteLines = splitType === 'lines';
    if (absoluteLines) el.style.position = 'relative';

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      absolute: absoluteLines,
      linesClass: 'split-line',
    });

    let targets: any;
    switch (splitType) {
      case 'lines':
        targets = splitter.lines;
        break;
      case 'words':
        targets = splitter.words;
        break;
      case 'words, chars':
        targets = [...splitter.words, ...splitter.chars];
        break;
      default:
        targets = splitter.chars;
    }

    const tl = gsap.timeline({
      repeat: repeat ? -1 : 0,
      onComplete: () => {
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [text, delay, duration, ease, splitType, from, to, repeat, onLetterAnimationComplete]);

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

  return (
    <p
      ref={ref}
      className={classNames(
        baseStyles[variant],
        'split-parent inline-block overflow-hidden tracking-wide break-words whitespace-normal transition-all duration-200 ease-in-out',
        {
          'text-primary-100': color === 'primary',
          'text-secondary-400': color === 'secondary',
        },
        classes,
      )}
    >
      {text}
    </p>
  );
};

export default SplitText;
