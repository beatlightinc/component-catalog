"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
var PageButton = function (props) {
    var pageNumber = props.pageNumber, onClick = props.onClick, disabled = props.disabled, className = props.className;
    var pageButtonClass = classnames('page-button', className, {
        disabled: disabled
    });
    return (React.createElement("button", { onClick: disabled ? null : onClick, className: pageButtonClass }, pageNumber));
};
exports.default = PageButton;
//# sourceMappingURL=page-button.js.map