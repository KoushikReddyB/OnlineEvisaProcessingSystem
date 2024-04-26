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
exports.SegmentedControl = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var buttons_1 = require("../button/buttons");
/**
 * Segmented control component.
 *
 * @see https://blueprintjs.com/docs/#core/components/segmented-control
 */
exports.SegmentedControl = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, defaultValue = props.defaultValue, fill = props.fill, inline = props.inline, intent = props.intent, large = props.large, onValueChange = props.onValueChange, options = props.options, small = props.small, controlledValue = props.value, htmlProps = tslib_1.__rest(props, ["className", "defaultValue", "fill", "inline", "intent", "large", "onValueChange", "options", "small", "value"]);
    var _b = React.useState(defaultValue), localValue = _b[0], setLocalValue = _b[1];
    var selectedValue = controlledValue !== null && controlledValue !== void 0 ? controlledValue : localValue;
    var handleOptionClick = React.useCallback(function (newSelectedValue, targetElement) {
        setLocalValue(newSelectedValue);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newSelectedValue, targetElement);
    }, [onValueChange]);
    var classes = (0, classnames_1.default)(common_1.Classes.SEGMENTED_CONTROL, className, (_a = {},
        _a[common_1.Classes.FILL] = fill,
        _a[common_1.Classes.INLINE] = inline,
        _a));
    return (React.createElement("div", tslib_1.__assign({ className: classes, ref: ref }, (0, props_1.removeNonHTMLProps)(htmlProps)), options.map(function (option) { return (React.createElement(SegmentedControlOption, tslib_1.__assign({}, option, { intent: intent, isSelected: selectedValue === option.value, key: option.value, large: large, onClick: handleOptionClick, small: small }))); })));
});
exports.SegmentedControl.defaultProps = {
    defaultValue: undefined,
    intent: common_1.Intent.NONE,
};
exports.SegmentedControl.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".SegmentedControl");
function SegmentedControlOption(_a) {
    var isSelected = _a.isSelected, label = _a.label, onClick = _a.onClick, value = _a.value, buttonProps = tslib_1.__rest(_a, ["isSelected", "label", "onClick", "value"]);
    var handleClick = React.useCallback(function (event) { return onClick === null || onClick === void 0 ? void 0 : onClick(value, event.currentTarget); }, [onClick, value]);
    return React.createElement(buttons_1.Button, tslib_1.__assign({ onClick: handleClick, minimal: !isSelected, text: label }, buttonProps));
}
SegmentedControlOption.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".SegmentedControlOption");
//# sourceMappingURL=segmentedControl.js.map