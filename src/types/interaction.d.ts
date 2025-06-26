namespace Interaction {
  /** SplitText */
  interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'lines' | 'words' | 'words, chars';
    from?: Record<string, any>;
    to?: Record<string, any>;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right';
    repeat?: boolean;
    onLetterAnimationComplete?: () => void;
  }
}
