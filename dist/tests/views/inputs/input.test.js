"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var sinon = require("sinon");
var enzyme_1 = require("enzyme");
var input_1 = require("../../../ts/views/inputs/input");
var inputSpy = sinon.spy();
ava_1.default('<Input /> onChange does not get called if disabled', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(input_1.default, { inputType: "text", autoFocus: false, value: "something", onHandleChange: inputSpy, disabled: true }));
    wrapper.find('input').simulate('change', { target: { value: 'My new value' } });
    t.is(inputSpy.called, false);
});
ava_1.default('<Input /> passed in function gets called if not disabled', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(input_1.default, { inputType: "text", value: "something", autoFocus: false, onHandleChange: inputSpy, disabled: false }));
    wrapper.find('input').simulate('change', { target: { value: 'My new value' } });
    t.is(inputSpy.called, true);
});
ava_1.default('<Input /> wrapper and children elements get proper classnames if disabled', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(input_1.default, { inputType: "text", value: "something", autoFocus: true, onHandleChange: inputSpy, disabled: true }));
    // Test the wrapper
    t.is(wrapper.hasClass('input-container disabled'), true);
    t.is(wrapper.containsMatchingElement(React.createElement("input", { className: "input-component disabled" })), true);
});
ava_1.default('<Input /> wrapper and children elements get proper classnames if NOT disabled', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(input_1.default, { inputType: "text", value: "something", autoFocus: false, onHandleChange: inputSpy }));
    t.is(wrapper.hasClass('input-container disabled'), false);
    t.is(wrapper.containsMatchingElement(React.createElement("input", { className: "input-component disabled" })), false);
});
//# sourceMappingURL=input.test.js.map