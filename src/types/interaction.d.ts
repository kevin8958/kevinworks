namespace Interaction {
  /** SplitText */
  interface SplitTextProps {
    classes?: string;
    color?: TypographyColor;
    variant: 'h2' | 'h3' | 'h4' | 'display1' | 'display2' | 'body1' | 'body2' | 'caption';
    text: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'lines' | 'words' | 'words, chars';
    from?: Record<string, any>;
    to?: Record<string, any>;
    threshold?: number;
    rootMargin?: string;
    repeat?: boolean;
    onLetterAnimationComplete?: () => void;
  }
}
