import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';

const Pagination = (props: {
  activePage: number,
  totalPages: number,
  pageChanged?: (pageNumber: number) => void
}) => {
    const { activePage, totalPages, pageChanged } = props
    const breakElement = <div className="pagination-break">{'...'}</div>;
    let allPageElements = [];
    let pageRangeArr = [];
    let pageRange;

    for (let i = 0; i < totalPages; i++) {
      const isActive = i === activePage;
      const pageClass = classnames('pagination-element', {
        '(isActive)': isActive
      });
      allPageElements.push(
        <PageButton onClick={pageChanged.bind(this, i)} buttonNumber={i} className={pageClass} />
      );
    }

    if (totalPages <= 5) {
      pageRangeArr = allPageElements;
      pageRange = <div className="pagination-element-wrapper">{pageRangeArr}</div>;
    }

    if (activePage + 1 === 1) {
      pageRangeArr = allPageElements.slice(0, activePage + 3);
      pageRange = <div>
        {pageRangeArr}
        {breakElement}
        {allPageElements[totalPages - 1]}
      </div>;
    }


    return (<div></div>);
};

export default Pagination;
