"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
var Button = function (props) {
    var onClick = props.onClick, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var buttonClass = classnames('button-component', className, {
        disabled: props.disabled
    });
    return (React.createElement("button", { onClick: props.disabled ? null : props.onClick, className: buttonClass }, children));
};
exports.default = Button;
//# sourceMappingURL=button.js.map