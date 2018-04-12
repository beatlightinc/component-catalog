/// <reference types="react" />
declare const NestedList: (props: {
    listItems: any;
    classname?: string;
    activeCategory: string;
    nameParser?: (name: string) => string;
    splitMethod?: (item: any) => void;
    itemOnClick: (item: any) => void;
}) => JSX.Element;
export default NestedList;
