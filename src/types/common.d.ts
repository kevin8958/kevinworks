namespace Common {
  /** Typography */
  type TypographyColor = 'primary' | 'secondary';
  interface TypographyProps {
    classes?: string;
    color?: TypographyColor;
    variant: 'h2' | 'h3' | 'h4' | 'display1' | 'display2' | 'body1' | 'body2' | 'caption';
    children?: React.ReactNode | string;
  }
  /** Alert */
  type AlertState = 'info' | 'success' | 'warning' | 'danger';
  type AlertVariant = 'contain' | 'outline';
  interface AlertProps {
    classes?: string;
    variant: AlertVariant;
    state: AlertState;
    title: string;
    message?: string;
    showClose?: boolean;
    time?: number;
    repeat?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    hideIcon?: boolean;
    onClose?: () => void;
  }

  /** Avatar */
  type AvatarSize = 'lg' | 'md' | 'sm';
  type AvatarType = 'image' | 'text';
  type AvatarState = 'none' | 'active' | 'semiActive' | 'inactive';
  interface AvatarProps {
    id?: string;
    classes?: string;
    size: AvatarSize;
    type?: AvatarType;
    state?: AvatarState;
    disabled?: boolean;
    profileImageUrl?: string;
    name?: string;
  }
  /** Button */
  type ButtonType = 'button' | 'submit';
  type ButtonSize = 'lg' | 'md' | 'sm';
  type ButtonVariant = 'contain' | 'outline' | 'clear';
  type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';
  type ButtonIconPosition = 'left' | 'right';
  interface ButtonProps {
    id?: string;
    classes?: string;
    type?: ButtonType;
    children?: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    /** state start */
    disabled?: boolean;
    loading?: boolean;
    prompted?: boolean;
    /** state end */
    icon?: React.ReactNode;
    iconPosition?: ButtonIconPosition;
    onClick?: (e) => void;
  }

  /** ButtonGroup */
  type ButtonGroupSize = 'lg' | 'md' | 'sm';
  type ButtonGroupOption = { id: string; value: string };
  interface ButtonGroupProps {
    title?: string;
    classes?: string;
    size?: ButtonGroupSize;
    value: ButtonGroupOption;
    options: ButtonGroupOption[];
    onChange?: (option: ButtonGroupOption) => void;
  }

  /** Dialog */
  type DialogPlacement = 'top' | 'center' | 'bottom';
  type DialogState = 'info' | 'success' | 'warning' | 'danger' | 'default';
  interface DialogProps {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    placement?: DialogPlacement;
    state?: DialogState;
  }
  interface DialogContextValue {
    openDialog: (options: DialogProps) => Promise<boolean>;
    close: (value?: boolean) => void;
  }
  /** Menu */
  type MenuItem = { id: string; label: string };

  interface MenuProps {
    id: string;
    value: MenuItem;
    items: MenuItem[];
    buttonClasses?: string;
    dialogPosition?: 'left' | 'right';
    onChange: (item: MenuItem) => void;
  }

  /** Box */
  interface BoxProps {
    id?: string;
    classes?: string;
    type?: 'default' | 'card' | 'code';
    title?: string;
    maxWidth?: number;
    children?: React.ReactNode;
  }
  /** Checkbox */
  type CheckboxSize = 'sm' | 'md' | 'lg';
  interface CheckboxProps {
    id: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    size?: CheckboxSize;
    classes?: string;
    onChange?: (data: { id: string; checked: boolean }) => void;
  }

  /** ComboBox */
  interface ComboBoxOption {
    options: { id: number; value: string; available?: boolean }[];
  }

  /** Store */
  interface CommonStore {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    toggleIsDarkMode: () => void;
  }
}
