/// <reference types="react" />
declare const PageButton: (props: {
    pageNumber: number;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}) => JSX.Element;
export default PageButton;
