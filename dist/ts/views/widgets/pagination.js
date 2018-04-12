"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var page_button_1 = require("../buttons/page-button");
var classnames = require("classnames");
var Pagination = function (props) {
    var activePage = props.activePage, totalPages = props.totalPages, onClick = props.onClick;
    var breakElement = React.createElement("div", { className: "pagination-break" }, '...');
    var allPageElements = [];
    var pageRangeArr = [];
    var pageRange;
    for (var i = 0; i < totalPages; i++) {
        var isActive = i === activePage;
        var pageClass = classnames('pagination-element', {
            isActive: isActive
        });
        allPageElements.push(React.createElement(page_button_1.default, { onClick: onClick, pageNumber: i, className: pageClass, key: i }));
    }
    if (totalPages <= 5) {
        pageRangeArr = allPageElements;
        pageRange = React.createElement("div", { className: "pagination-element-wrapper" }, pageRangeArr);
    }
    else if (activePage + 1 === 1) {
        pageRangeArr = allPageElements.slice(0, activePage + 3);
        pageRange = (React.createElement("div", { className: "pagination-element-wrapper" },
            pageRangeArr,
            breakElement,
            allPageElements[totalPages - 1]));
    }
    else if (activePage !== 0 && activePage <= 3) {
        pageRangeArr = allPageElements.slice(0, activePage + 2);
        pageRange = (React.createElement("div", { className: "pagination-element-wrapper" },
            pageRangeArr,
            breakElement,
            allPageElements[totalPages - 1]));
    }
    else if (activePage === totalPages - 1) {
        pageRangeArr = allPageElements.slice(activePage - 3);
        pageRange = (React.createElement("div", { className: "pagination-element-wrapper" },
            allPageElements[0],
            breakElement,
            pageRangeArr));
    }
    else if (activePage !== totalPages - 1 && activePage >= totalPages - 4) {
        pageRangeArr = allPageElements.slice(activePage - 1);
        pageRange = (React.createElement("div", { className: "pagination-element-wrapper" },
            allPageElements[0],
            breakElement,
            pageRangeArr));
    }
    else if (activePage > 3 && activePage < totalPages - 4) {
        pageRangeArr = allPageElements.slice(activePage - 1, activePage + 2);
        pageRange = (React.createElement("div", { className: "pagination-element-wrapper" },
            allPageElements[0],
            breakElement,
            pageRangeArr,
            breakElement,
            allPageElements[totalPages - 1]));
    }
    return (React.createElement("div", { className: "pagination-container" },
        activePage === 0 ? null
            : React.createElement("div", { className: "pagination-button", onClick: onClick }, '<'),
        pageRange,
        activePage === totalPages - 1 ? null
            : React.createElement("div", { className: "pagination-button", onClick: onClick }, '>')));
};
exports.default = Pagination;
//# sourceMappingURL=pagination.js.map