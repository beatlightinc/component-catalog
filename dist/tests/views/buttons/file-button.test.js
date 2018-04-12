"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var sinon = require("sinon");
var enzyme_1 = require("enzyme");
var file_button_1 = require("../../../ts/views/buttons/file-button");
// I'm just doing this to make sure they're calling when NOT disabled too
ava_1.default('<FileButton/> functions work properly', function (t) {
    var onClickSpy = sinon.spy();
    var onChangeSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(file_button_1.default, { onClick: onClickSpy, onChange: onChangeSpy }, 'test upload'));
    wrapper.find('input').simulate('change', { target: { file: 'some/file/path' } });
    wrapper.find('input').simulate('click');
    t.is(onChangeSpy.called, true);
    t.is(onClickSpy.called, true);
});
ava_1.default('<FileButton /> gets proper classnames if disabled', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(file_button_1.default, { disabled: true }, 'test upload'));
    t.is(wrapper.hasClass('file-button disabled'), true);
    t.is(wrapper.containsMatchingElement(React.createElement("input", { className: "file-button-input disabled" })), true);
});
ava_1.default('<FileButton /> functions do not get called if disabled', function (t) {
    var onChangeSpy = sinon.spy();
    var onClickSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(file_button_1.default, { onChange: onChangeSpy, onClick: onClickSpy, disabled: true }));
    wrapper.find('input').simulate('change', { target: { file: 'some/file/path' } });
    wrapper.find('input').simulate('click');
    t.is(onChangeSpy.called, false);
    t.is(onClickSpy.called, false);
});
//# sourceMappingURL=file-button.test.js.map