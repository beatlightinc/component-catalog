import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';

const Pagination = (props: {
  activePage: number,
  totalPages: number,
  pageChanged?: (pageNumber: number) => void
}) => {
    const { activePage, totalPages, pageChanged } = props;
    const breakElement = <div className="pagination-break">{'...'}</div>;
    const allPageElements = [];
    let pageRangeArr = [];
    let pageRange;

    for (let i = 0; i < totalPages; i++) {
      const isActive = i === activePage;
      const pageClass = classnames('pagination-element', {
        '(isActive)': isActive
      });
      allPageElements.push(
        <PageButton onClick={pageChanged.bind(this, i)} buttonNumber={i} className={pageClass} key={i} />
      );
    }

    if (totalPages <= 5) {
      pageRangeArr = allPageElements;
      pageRange = <div className="pagination-element-wrapper">{pageRangeArr}</div>;
    }

    else if (activePage + 1 === 1) {
      pageRangeArr = allPageElements.slice(0, activePage + 3);
      pageRange = <div className="pagination-element-wrapper">
        {pageRangeArr}
        {breakElement}
        {allPageElements[totalPages - 1]}
      </div>;
    }

    else if (activePage !== 0 && activePage <= 3) {
      pageRangeArr = allPageElements.slice(0, activePage + 2);
      pageRange = <div className="pagination-element-wrapper">
        {pageRangeArr}
        {breakElement}
        {allPageElements[totalPages - 1]}
      </div>;
    }

    else if (activePage === totalPages - 1) {
      pageRangeArr = allPageElements.slice(activePage - 3);
      pageRange = <div className="pagination-element-wrapper">
        {allPageElements[0]}
        {breakElement}
        {pageRangeArr}
      </div>;
    }

    else if (activePage !== totalPages - 1 && activePage <= totalPages - 4) {
      pageRangeArr = allPageElements.slice(activePage - 1);
      pageRange = <div className="pagination-element-wrapper">
        {allPageElements[0]}
        {breakElement}
        {pageRangeArr}
      </div>;
    }

    else if (activePage > 3 && activePage < totalPages - 4) {
      pageRangeArr = allPageElements.slice(activePage - 1, activePage + 2);
      pageRange = <div>
        {allPageElements[0]}
        {breakElement}
        {pageRangeArr}
        {allPageElements}
      </div>;
    }

    return (
    <div className="pagination-container">
      {activePage === 0 ? null
        : <div className="pagination-button" onClick={pageChanged.bind(this, activePage - 1)}>{'<'}</div>}
      {pageRange}
      {activePage === totalPages - 1 ? null
        : <div className="pagination-button" onClick={pageChanged.bind(this, activePage + 1)}>{'>'}</div>}
    </div>
  );
};

export default Pagination;
