namespace Common {
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
  interface AvatarStackProps {
    users: Common.AvatarProps[]; // Avatar에 전달되는 동일한 props 타입
    max?: number; // 표시할 최대 개수
    overlap?: number; // 겹침 정도 (기본: -8px)
    size?: Common.AvatarProps['size']; // sm, md, lg
    classes?: string;
  }
  /** Button */
  type ButtonType = 'button' | 'submit';
  type ButtonSize = 'lg' | 'md' | 'sm';
  type ButtonVariant = 'contain' | 'outline' | 'clear';
  type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'danger';
  type ButtonIconPosition = 'left' | 'right';
  type ButtonShape = 'rect' | 'circle';
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
    shape?: ButtonShape;
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

  /** Datepicker */
  type DatepickerType = 'single' | 'range';
  type DatepickerSize = 'sm' | 'md' | 'lg';
  type DatepickerVariant = 'outline' | 'contain' | 'clear';
  interface DatepickerProps {
    classes?: string;
    type: DatepickerType;
    variant?: DatepickerVariant;
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

  /** Dropdown */

  type DropdownItem =
    | {
        type: 'item';
        id: string;
        label: string;
        icon?: React.ReactNode;
        onClick?: () => void;
        danger?: boolean;
      }
    | { type: 'group'; id: string; label?: string; icon?: React.ReactNode; items: DropdownItem[] }
    | { type: 'submenu'; id: string; label: string; icon?: React.ReactNode; items: DropdownItem[] };

  interface DropdownProps {
    items: DropdownItem[];
    onChange?: (value: any) => void;
    dialogPosition?: 'left' | 'right';
    dialogWidth?: number;
    buttonItem?: string | React.ReactNode;
    buttonClasses?: string;
  }

  type ProgressSize = 'sm' | 'md' | 'lg';
  type ProgressLabelPosition = 'top' | 'bottom' | 'inside';

  interface ProgressProps {
    value: number;
    size?: ProgressSize;
    width?: string | number;
    label?: string;
    labelPosition?: LabelPosition;
    isCircle?: boolean;
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
  /** TextInput */
  type TextInputSize = 'sm' | 'md' | 'lg';
  type TextInputType = 'text' | 'password' | 'email' | 'number';
  type TextInputRounded = 'sm' | 'md' | 'lg' | '2xl';
  interface TextInputProps {
    label?: string;
    placeholder?: string;
    id?: string;
    classes?: string;
    type?: TextInputType;
    value?: string;
    max?: number;
    size?: TextInputSize;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMsg?: string;
    inputProps?: any;
    rounded?: TextInputRounded;
    suffix?: string | ReactNode;
    autoFocus?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }

  /** Store */
  interface CommonStore {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    toggleIsDarkMode: () => void;
  }

  /** Radio */
  type RadioOption = {
    id: string;
    label: string;
    desc?: string;
  };

  interface RadioProps {
    title?: string;
    options: RadioOption[];
    value: string; // selected id
    onChange: (value: string) => void;
    classes?: string;
  }
}
