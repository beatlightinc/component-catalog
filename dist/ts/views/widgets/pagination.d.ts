/// <reference types="react" />
declare const Pagination: (props: {
    activePage: number;
    totalPages: number;
    onClick?: () => void;
}) => JSX.Element;
export default Pagination;
