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
import { Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Card } from "../card/card";
import { Checkbox, Radio, Switch } from "../forms/controls";
import { useCheckedControl } from "./useCheckedControl";
/**
 * ControlCard component, used to render a {@link Card} with a form control.
 *
 * @internal
 */
export var ControlCard = React.forwardRef(function (props, ref) {
    var _a;
    var alignIndicator = props.alignIndicator, _checked = props.checked, children = props.children, className = props.className, controlKind = props.controlKind, _defaultChecked = props.defaultChecked, disabled = props.disabled, inputProps = props.inputProps, inputRef = props.inputRef, label = props.label, _onChange = props.onChange, showAsSelectedWhenChecked = props.showAsSelectedWhenChecked, value = props.value, cardProps = __rest(props, ["alignIndicator", "checked", "children", "className", "controlKind", "defaultChecked", "disabled", "inputProps", "inputRef", "label", "onChange", "showAsSelectedWhenChecked", "value"]);
    var _b = useCheckedControl(props), checked = _b.checked, onChange = _b.onChange;
    // use a container element to achieve a good flex layout
    var labelElement = React.createElement("div", { className: Classes.CONTROL_CARD_LABEL }, children !== null && children !== void 0 ? children : label);
    var controlProps = __assign({ alignIndicator: alignIndicator, checked: checked, disabled: disabled, inline: true, inputRef: inputRef, labelElement: labelElement, onChange: onChange, value: value }, inputProps);
    var classes = classNames(Classes.CONTROL_CARD, className, (_a = {},
        _a[Classes.SELECTED] = showAsSelectedWhenChecked && checked,
        _a));
    return (React.createElement(Card, __assign({ interactive: !disabled, className: classes, ref: ref }, cardProps), controlKind === "switch" ? (React.createElement(Switch, __assign({}, controlProps))) : controlKind === "checkbox" ? (React.createElement(Checkbox, __assign({}, controlProps))) : controlKind === "radio" ? (React.createElement(Radio, __assign({}, controlProps))) : (labelElement)));
});
ControlCard.defaultProps = {
    alignIndicator: "right",
    showAsSelectedWhenChecked: true,
};
ControlCard.displayName = "".concat(DISPLAYNAME_PREFIX, ".ControlCard");
//# sourceMappingURL=controlCard.js.map