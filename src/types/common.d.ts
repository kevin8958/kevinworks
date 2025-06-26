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
    classes?: string;
    title?: string;
    size?: ButtonGroupSize;
    value: ButtonGroupOption;
    options: ButtonGroupOption[];
    onChange?: (option: ButtonGroupOption) => void;
  }

  /** Badge */
  type BadgeSize = 'sm' | 'md' | 'lg';
  type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  interface BadgeProps {
    children: string | React.ReactNode;
    size?: BadgeSize;
    color?: BadgeColor;
    icon?: React.ReactNode;
    disabled?: boolean;
    classes?: string;
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
    classes?: string;
    id: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    size?: CheckboxSize;
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

  /** Datepicker */
  type DatepickerType = 'single' | 'range';
  type DatepickerSize = 'sm' | 'md' | 'lg';
  interface DatepickerProps {
    classes?: string;
    type: DatepickerType;
    value: Date | null;
    minDate?: Date | null;
    maxDate?: Date | null;
    isError?: boolean;
    isNullable?: boolean;
    isFilter?: boolean;
    placeholder?: string;
    isRange?: boolean;
    isMultiple?: boolean;
    startDate?: Date;
    endDate?: Date;
    size?: DatepickerSize;
    disabled?: boolean;
    hideHeaderButtons?: boolean;
    onChange?: (value: Date | null) => void;
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
  /** Drawer */
  interface DrawerProps {
    open: boolean;
    title?: string;
    children?: React.ReactNode;
    showFooter?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose: () => void;
  }

  /** Menu */
  type MenuItem = { id: string; label: string };

  interface MenuProps {
    value: MenuItem;
    items: MenuItem[];
    buttonClasses?: string;
    dialogPosition?: 'left' | 'right';
    onChange: (item: MenuItem) => void;
  }
  /** SimpleTable */
  type Column = {
    key: string;
    label: string;
  };
  type Row = {
    id: string | number;
    [key: string]: any;
  };
  interface SimpleTableProps {
    columns: Column[];
    data: Row[];
  }
}
