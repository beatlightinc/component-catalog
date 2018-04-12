"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
var NestedList = function (props) {
    var listItems = props.listItems, classname = props.classname, activeCategory = props.activeCategory, nameParser = props.nameParser, splitMethod = props.splitMethod, itemOnClick = props.itemOnClick;
    function getCountsArray() {
        var listItems = this.props.listItems;
        var counts = [];
        listItems.forEach(function (listItem) {
            var splitItem = listItem.split(".");
            //im mutating this guy so want a copy
            var item = listItem;
            var i;
            for (i = 0; i < splitItem.length; i++) {
                if (item in counts) {
                    counts[item]++;
                }
                else {
                    counts[item] = 1;
                }
                item = item.substring(0, item.lastIndexOf("."));
            }
        });
        return counts;
    }
    function renderLevel(prevLevel) {
        var _this = this;
        var _a = this.props, activeCategory = _a.activeCategory, listItems = _a.listItems, itemOnClick = _a.itemOnClick, nameParser = _a.nameParser;
        var currentDepth = prevLevel.split(".").length;
        var splitActive = activeCategory.split(".");
        var splitPrev = prevLevel.split(".");
        var showing = true;
        var i;
        for (i = 0; i < currentDepth; i++) {
            if (splitActive[i] != splitPrev[i]) {
                showing = false;
            }
        }
        if (!showing) {
            return null;
        }
        else {
            var validCategories = listItems.filter(function (item) {
                return item.indexOf(prevLevel + ".") === 0;
            });
            var options_1 = {};
            validCategories.forEach(function (cat) {
                var splitCat = cat.split(".");
                if (options_1[splitCat[currentDepth]]) {
                    options_1[splitCat[currentDepth]]++;
                }
                else {
                    options_1[splitCat[currentDepth]] = 1;
                }
            });
            var wrapperClassName_1 = classnames("tree-level-wrapper", "level-" + currentDepth);
            return (React.createElement("div", { className: wrapperClassName_1 }, Object.keys(options_1).map(function (option, i) {
                var optionClassName = classnames("tree-list-option", "level-" + currentDepth, { "active": option === splitActive[currentDepth] });
                return (React.createElement("div", { key: i },
                    React.createElement("div", { className: optionClassName, onClick: itemOnClick.bind(_this, prevLevel + "." + option) }, nameParser ? nameParser(option) + " (" + options_1[option] + ")" : option + " (" + options_1[option] + ")"),
                    _this.renderLevel(prevLevel + "." + option)));
            })));
        }
        ;
    }
    function renderTopLevel() {
        var _this = this;
        var _a = this.props, listItems = _a.listItems, activeCategory = _a.activeCategory, itemOnClick = _a.itemOnClick;
        var counts = this.getCountsArray();
        var activeTop = activeCategory.split(".")[0];
        var topOptions = Object.keys(counts).filter(function (iKey) {
            return iKey.indexOf(".") < 0;
        });
        var allClassName = classnames("tree-list-option level-0", { "active": activeTop === "" });
        var topComponents = topOptions.map(function (option, i) {
            var optionClassName = classnames("tree-list-option level-0", { "active": option === activeTop });
            return (React.createElement("div", { key: i },
                React.createElement("div", { className: optionClassName, onClick: itemOnClick.bind(_this, option) }, option + " (" + counts[option] + ")"),
                _this.renderLevel(option)));
        });
    }
    var wrapperClassName = classnames("tree-list-wrapper", classname);
    return (React.createElement("div", { className: wrapperClassName }, _this.renderTopLevel()));
};
exports.default = NestedList;
//# sourceMappingURL=nested-list.js.map