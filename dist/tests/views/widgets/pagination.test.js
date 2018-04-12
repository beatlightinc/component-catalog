"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ava_1 = require("ava");
var enzyme_1 = require("enzyme");
var pagination_1 = require("../../../ts/views/widgets/pagination");
ava_1.default('<Pagination /> will render right amount of buttons for <= 5 total pages ', function (t) {
    // TODO: write actual test for this, haven't found the right approach yet
    var firstWrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 3, totalPages: 5 }));
    var secondWrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 2, totalPages: 3 }));
    var firstButtonAmount = firstWrapper.find('PageButton').length;
    var secondButtonAmount = secondWrapper.find('PageButton').length;
    t.is(firstButtonAmount, 5);
    t.is(secondButtonAmount, 3);
});
ava_1.default('<Pagination /> will render the correct amount of buttons when active page is 0 and total pages > 5', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 0, totalPages: 6 }));
    var buttonAmount = wrapper.find('PageButton').length;
    t.is(buttonAmount, 4);
});
ava_1.default('<Pagination/> will render correct # of buttons when activePage !== 0 && <= 3, and total pages > 5', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 2, totalPages: 20 }));
    var buttonAmount = wrapper.find('PageButton').length;
    t.is(buttonAmount, 5);
});
ava_1.default('<Pagination/> will render correct # of buttons if active page is last page', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 10, totalPages: 11 }));
    var buttonAmount = wrapper.find('PageButton').length;
    t.is(buttonAmount, 5);
});
ava_1.default('<Pagination/> renders corrent # of buttons when active page is not last page to 4th to last', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 8, totalPages: 12 }));
    var buttonAmount = wrapper.find('PageButton').length;
    console.log(buttonAmount);
    t.is(buttonAmount, 6);
});
ava_1.default('<Pagination/> render correct # of buttons if active page is > 3 and < total pages minus 4', function (t) {
    var wrapper = enzyme_1.shallow(React.createElement(pagination_1.default, { activePage: 6, totalPages: 12 }));
    var buttonAmount = wrapper.find('PageButton').length;
    t.is(buttonAmount, 5);
});
//# sourceMappingURL=pagination.test.js.map