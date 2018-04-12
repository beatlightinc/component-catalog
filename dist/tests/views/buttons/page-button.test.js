"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var sinon = require("sinon");
var enzyme_1 = require("enzyme");
var page_button_1 = require("../../../ts/views/buttons/page-button");
ava_1.default('<PageButton /> onclick and page number work if passed in', function (t) {
    var onClickSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(page_button_1.default, { pageNumber: 2, onClick: onClickSpy }));
    wrapper.simulate('click');
    t.is(onClickSpy.called, true);
    t.is(wrapper.text(), '2');
});
ava_1.default('<PageButton /> onclick will not fire if disabled, classname gets passed in', function (t) {
    var onClickSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(page_button_1.default, { pageNumber: 2, disabled: true, onClick: onClickSpy }));
    wrapper.simulate('click');
    t.is(onClickSpy.called, false);
    t.is(wrapper.hasClass('page-button'), true);
});
//# sourceMappingURL=page-button.test.js.map