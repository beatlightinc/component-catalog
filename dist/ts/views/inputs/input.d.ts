/// <reference types="react" />
declare const Input: (props: {
    inputType?: string;
    autoFocus?: boolean;
    iconType?: string;
    onSubmission?: () => void;
    onHandleChange?: () => {};
    hasValidationState?: boolean;
    validationState?: boolean;
    value?: string;
    disabled?: boolean;
    pattern?: string;
    placeholder?: string;
    maxLength?: number;
    containerStyle?: any;
    inputStyle?: any;
}) => JSX.Element;
export default Input;
