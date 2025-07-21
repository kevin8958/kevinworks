namespace Interaction {
  /** SplitText */
  interface SplitTextProps {
    text: string;
    classes?: string;
    variant?: 'h2' | 'h3' | 'h4' | 'display1' | 'display2' | 'body1' | 'body2' | 'caption';
    delay?: number; // ms per letter
    repeat?: boolean;
  }
}
