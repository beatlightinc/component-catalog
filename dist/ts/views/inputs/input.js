"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
var Input = function (props) {
    var inputType = props.inputType, autoFocus = props.autoFocus, iconType = props.iconType, onSubmission = props.onSubmission, onHandleChange = props.onHandleChange, hasValidationState = props.hasValidationState, validationState = props.validationState, value = props.value, disabled = props.disabled, pattern = props.pattern, placeholder = props.placeholder, maxLength = props.maxLength, containerStyle = props.containerStyle, inputStyle = props.inputStyle;
    var inputContainerClass = classnames('input-container', {
        disabled: props.disabled
    });
    var inputClass = classnames('input-component', {
        disabled: props.disabled,
        valid: hasValidationState && validationState && value.length > 0,
        invalid: hasValidationState && validationState === false && value.length > 0
    });
    // TODO: Icon logic and implementation
    var inputIcon = React.createElement("div", null, 'ICON');
    return (React.createElement("div", { className: inputContainerClass, style: containerStyle },
        React.createElement("input", { type: inputType, onChange: disabled ? null : onHandleChange, className: inputClass, maxLength: 150, disabled: disabled, pattern: pattern, value: value, placeholder: placeholder ? placeholder : null, style: inputStyle }),
        iconType ? inputIcon : null));
};
exports.default = Input;
//# sourceMappingURL=input.js.map