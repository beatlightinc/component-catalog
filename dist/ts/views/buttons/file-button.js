"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
var FileButton = function (props) {
    var children = props.children, accept = props.accept, single = props.single, onChange = props.onChange, onClick = props.onClick, disabled = props.disabled;
    var wrapperClass = classnames('file-button', {
        disabled: props.disabled
    });
    var inputClass = classnames('file-button-input', {
        disabled: props.disabled
    });
    return (React.createElement("label", { htmlFor: "load-file", className: wrapperClass },
        React.createElement("div", null, children),
        React.createElement("input", { className: inputClass, type: "file", id: "load-file", multiple: single ? false : true, onChange: disabled ? null : onChange, onClick: disabled ? null : onClick, accept: accept })));
};
exports.default = FileButton;
//# sourceMappingURL=file-button.js.map