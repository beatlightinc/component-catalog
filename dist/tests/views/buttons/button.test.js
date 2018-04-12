"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var sinon = require("sinon");
var enzyme_1 = require("enzyme");
var button_1 = require("../../../ts/views/buttons/button");
ava_1.default('button onclick work if passed in', function (t) {
    var onClickSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(button_1.default, { onClick: onClickSpy }));
    wrapper.simulate('click');
    t.is(onClickSpy.called, true);
});
ava_1.default('button onclick will not fire if disabled prop, classname gets passed in', function (t) {
    var onClickSpy = sinon.spy();
    var wrapper = enzyme_1.shallow(React.createElement(button_1.default, { onClick: onClickSpy, disabled: true, className: "button-class-name" }));
    wrapper.simulate('click');
    t.is(onClickSpy.called, false);
    t.is(wrapper.hasClass('button-component button-class-name disabled'), true);
});
ava_1.default('<Button /> gets children passed in properly', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(button_1.default, null, 'Continue'));
    t.is(wrapper.text(), 'Continue');
});
//# sourceMappingURL=button.test.js.map