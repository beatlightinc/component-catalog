"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var enzyme_1 = require("enzyme");
var test_component_1 = require("../ts/views/test-component");
ava_1.default('first test - test that test component has proper', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(test_component_1.default, { name: 'testName' }));
    t.true(wrapper.hasClass('test-component-class'));
});
ava_1.default('tests whether children get passed in', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(test_component_1.default, { name: 'testName' },
        React.createElement("div", { className: "child" })));
    t.true(wrapper.contains(React.createElement("div", { className: "child" })));
});
//# sourceMappingURL=test-test-component.js.map