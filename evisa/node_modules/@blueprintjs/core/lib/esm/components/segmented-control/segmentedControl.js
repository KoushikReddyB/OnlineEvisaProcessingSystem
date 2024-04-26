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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, Intent } from "../../common";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps, } from "../../common/props";
import { Button } from "../button/buttons";
/**
 * Segmented control component.
 *
 * @see https://blueprintjs.com/docs/#core/components/segmented-control
 */
export var SegmentedControl = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, defaultValue = props.defaultValue, fill = props.fill, inline = props.inline, intent = props.intent, large = props.large, onValueChange = props.onValueChange, options = props.options, small = props.small, controlledValue = props.value, htmlProps = __rest(props, ["className", "defaultValue", "fill", "inline", "intent", "large", "onValueChange", "options", "small", "value"]);
    var _b = React.useState(defaultValue), localValue = _b[0], setLocalValue = _b[1];
    var selectedValue = controlledValue !== null && controlledValue !== void 0 ? controlledValue : localValue;
    var handleOptionClick = React.useCallback(function (newSelectedValue, targetElement) {
        setLocalValue(newSelectedValue);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newSelectedValue, targetElement);
    }, [onValueChange]);
    var classes = classNames(Classes.SEGMENTED_CONTROL, className, (_a = {},
        _a[Classes.FILL] = fill,
        _a[Classes.INLINE] = inline,
        _a));
    return (React.createElement("div", __assign({ className: classes, ref: ref }, removeNonHTMLProps(htmlProps)), options.map(function (option) { return (React.createElement(SegmentedControlOption, __assign({}, option, { intent: intent, isSelected: selectedValue === option.value, key: option.value, large: large, onClick: handleOptionClick, small: small }))); })));
});
SegmentedControl.defaultProps = {
    defaultValue: undefined,
    intent: Intent.NONE,
};
SegmentedControl.displayName = "".concat(DISPLAYNAME_PREFIX, ".SegmentedControl");
function SegmentedControlOption(_a) {
    var isSelected = _a.isSelected, label = _a.label, onClick = _a.onClick, value = _a.value, buttonProps = __rest(_a, ["isSelected", "label", "onClick", "value"]);
    var handleClick = React.useCallback(function (event) { return onClick === null || onClick === void 0 ? void 0 : onClick(value, event.currentTarget); }, [onClick, value]);
    return React.createElement(Button, __assign({ onClick: handleClick, minimal: !isSelected, text: label }, buttonProps));
}
SegmentedControlOption.displayName = "".concat(DISPLAYNAME_PREFIX, ".SegmentedControlOption");
//# sourceMappingURL=segmentedControl.js.map