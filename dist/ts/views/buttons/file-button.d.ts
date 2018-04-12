/// <reference types="react" />
declare const FileButton: (props: {
    children?: any;
    accept?: string;
    single?: boolean;
    disabled?: boolean;
    onChange?: () => void;
    onClick?: () => void;
}) => JSX.Element;
export default FileButton;
