import * as React from 'react';

const Pagination = (props: {
  activePage: number,
  totalPages: number,
  pageChanged?: (pageNumber: number) => void
}) => {
    const { activePage, totalPages, pageChanged } = props;
    return (<div></div>);
};

export default Pagination;
