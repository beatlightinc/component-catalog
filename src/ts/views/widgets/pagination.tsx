import * as React from 'react';
import PageButton from '../buttons/page-button';
import * as classnames from 'classnames';

const Pagination = (props: {
  activePage: number,
  totalPages: number,
  onClick: (pageNumber: number) => void,
  className?: string,
  style?: any
}) => {
    const { activePage, totalPages, onClick, className, style } = props;
    const breakElement = <div className="icon-more-horizontal pagination-break"/>;
    const allPageElements = [];
    let pageRangeArr = [];
    let pageRange;

    for (let i = 0; i < totalPages; i++) {
      const isActive = i === activePage;
      const pageClass = classnames('pagination-element', {
        isActive
      });
      allPageElements.push(
        <PageButton
          onClick={() => onClick(i)}
          pageNumber={i}
          className={pageClass}
          key={i} />
      );
    }

    if (totalPages <= 5) {
      pageRangeArr = allPageElements;
      pageRange = <div className="pagination-element-wrapper">{pageRangeArr}</div>;
    }

    else if (activePage + 1 === 1) {
      pageRangeArr = allPageElements.slice(0, activePage + 3);
      pageRange = (
        <div className="pagination-element-wrapper">
          {pageRangeArr}
          {breakElement}
          {allPageElements[totalPages - 1]}
        </div>
      );
    }

    else if (activePage !== 0 && activePage <= 3) {
      pageRangeArr = allPageElements.slice(0, activePage + 2);
      pageRange = (
        <div className="pagination-element-wrapper">
          {pageRangeArr}
          {breakElement}
          {allPageElements[totalPages - 1]}
        </div>
      );
    }

    else if (activePage === totalPages - 1) {
      pageRangeArr = allPageElements.slice(activePage - 3);
      pageRange = (
        <div className="pagination-element-wrapper">
          {allPageElements[0]}
          {breakElement}
          {pageRangeArr}
        </div>
      );
    }

    else if (activePage !== totalPages - 1 && activePage >= totalPages - 4) {
      pageRangeArr = allPageElements.slice(activePage - 1);
      pageRange = (
        <div className="pagination-element-wrapper">
          {allPageElements[0]}
          {breakElement}
          {pageRangeArr}
        </div>
      );
    }

    else if (activePage > 3 && activePage < totalPages - 4) {
      pageRangeArr = allPageElements.slice(activePage - 1, activePage + 2);
      pageRange = (
        <div className="pagination-element-wrapper">
          {allPageElements[0]}
          {breakElement}
          {pageRangeArr}
          {breakElement}
          {allPageElements[totalPages - 1]}
        </div>
      );
    }

    const wrapperClass = classnames('pagination-container', className);

    return (
      <div className={wrapperClass}
        style={style}
      >
        {activePage === 0 ? null
          : <div className="pagination-button icon-chevron-left" onClick={() => onClick(activePage - 1)} />}
        {pageRange}
        {activePage === totalPages - 1 ? null
          : <div className="pagination-button icon-chevron-right" onClick={() => onClick(activePage + 1)} />}
      </div>
  );
};

export default Pagination;
