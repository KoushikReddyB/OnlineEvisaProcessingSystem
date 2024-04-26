"use strict";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var card_1 = require("../card/card");
var collapse_1 = require("../collapse/collapse");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
/**
 * Section component.
 *
 * @see https://blueprintjs.com/docs/#core/components/section
 */
exports.Section = React.forwardRef(function (props, ref) {
    var _a, _b;
    var _c;
    var children = props.children, className = props.className, collapseProps = props.collapseProps, collapsible = props.collapsible, compact = props.compact, elevation = props.elevation, icon = props.icon, rightElement = props.rightElement, subtitle = props.subtitle, title = props.title, _d = props.titleRenderer, titleRenderer = _d === void 0 ? html_1.H6 : _d, htmlProps = tslib_1.__rest(props, ["children", "className", "collapseProps", "collapsible", "compact", "elevation", "icon", "rightElement", "subtitle", "title", "titleRenderer"]);
    // Determine whether to use controlled or uncontrolled state.
    var isControlled = (collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.isOpen) != null;
    // The initial useState value is negated in order to conform to the `isCollapsed` expectation.
    var _e = React.useState(!((_c = collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.defaultIsOpen) !== null && _c !== void 0 ? _c : true)), isCollapsedUncontrolled = _e[0], setIsCollapsed = _e[1];
    var isCollapsed = isControlled ? !(collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.isOpen) : isCollapsedUncontrolled;
    var toggleIsCollapsed = React.useCallback(function () {
        var _a;
        if (isControlled) {
            (_a = collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.onToggle) === null || _a === void 0 ? void 0 : _a.call(collapseProps);
        }
        else {
            setIsCollapsed(!isCollapsed);
        }
    }, [collapseProps, isCollapsed, isControlled]);
    var isHeaderRightContainerVisible = rightElement != null || collapsible;
    var sectionId = (0, utils_1.uniqueId)("section");
    var sectionTitleId = title ? (0, utils_1.uniqueId)("section-title") : undefined;
    return (React.createElement(card_1.Card, tslib_1.__assign({ className: (0, classnames_1.default)(className, common_1.Classes.SECTION, (_a = {},
            _a[common_1.Classes.COMPACT] = compact,
            _a[common_1.Classes.SECTION_COLLAPSED] = (collapsible && isCollapsed) || common_1.Utils.isReactNodeEmpty(children),
            _a)), elevation: elevation, ref: ref, "aria-labelledby": sectionTitleId }, htmlProps, { id: sectionId }),
        title && (React.createElement("div", { role: collapsible ? "button" : undefined, "aria-pressed": collapsible ? isCollapsed : undefined, "aria-expanded": collapsible ? isCollapsed : undefined, "aria-controls": collapsible ? sectionId : undefined, className: (0, classnames_1.default)(common_1.Classes.SECTION_HEADER, (_b = {},
                _b[common_1.Classes.INTERACTIVE] = collapsible,
                _b)), onClick: collapsible ? toggleIsCollapsed : undefined },
            React.createElement("div", { className: common_1.Classes.SECTION_HEADER_LEFT },
                icon && React.createElement(icon_1.Icon, { icon: icon, "aria-hidden": true, tabIndex: -1, className: common_1.Classes.TEXT_MUTED }),
                React.createElement("div", null,
                    React.createElement(titleRenderer, { className: common_1.Classes.SECTION_HEADER_TITLE, id: sectionTitleId }, title),
                    subtitle && (React.createElement("div", { className: (0, classnames_1.default)(common_1.Classes.TEXT_MUTED, common_1.Classes.SECTION_HEADER_SUB_TITLE) }, subtitle)))),
            isHeaderRightContainerVisible && (React.createElement("div", { className: common_1.Classes.SECTION_HEADER_RIGHT },
                rightElement,
                collapsible &&
                    (isCollapsed ? (React.createElement(icons_1.ChevronDown, { className: common_1.Classes.TEXT_MUTED })) : (React.createElement(icons_1.ChevronUp, { className: common_1.Classes.TEXT_MUTED }))))))),
        collapsible ? (React.createElement(collapse_1.Collapse, tslib_1.__assign({}, collapseProps, { isOpen: !isCollapsed }), children)) : (children)));
});
exports.Section.defaultProps = {
    compact: false,
    elevation: common_1.Elevation.ZERO,
};
exports.Section.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Section");
//# sourceMappingURL=section.js.map