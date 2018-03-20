import * as React from 'react';
import PageButton from '../buttons/page-button';

const Pagination = (props: {
  activePage: number,
  totalPages: number,
  pageChanged?: (pageNumber: number) => void
}) => {
    const { activePage, totalPages, pageChanged } = props;
    let allPageElements = [];
    let pageRangeArr = [];
    let pageRange;
    return (<div></div>);
};

export default Pagination;
