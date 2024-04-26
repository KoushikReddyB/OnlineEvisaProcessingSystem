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
export const SegmentedControl = React.forwardRef((props, ref) => {
    const { className, defaultValue, fill, inline, intent, large, onValueChange, options, small, value: controlledValue, ...htmlProps } = props;
    const [localValue, setLocalValue] = React.useState(defaultValue);
    const selectedValue = controlledValue ?? localValue;
    const handleOptionClick = React.useCallback((newSelectedValue, targetElement) => {
        setLocalValue(newSelectedValue);
        onValueChange?.(newSelectedValue, targetElement);
    }, [onValueChange]);
    const classes = classNames(Classes.SEGMENTED_CONTROL, className, {
        [Classes.FILL]: fill,
        [Classes.INLINE]: inline,
    });
    return (React.createElement("div", { className: classes, ref: ref, ...removeNonHTMLProps(htmlProps) }, options.map(option => (React.createElement(SegmentedControlOption, { ...option, intent: intent, isSelected: selectedValue === option.value, key: option.value, large: large, onClick: handleOptionClick, small: small })))));
});
SegmentedControl.defaultProps = {
    defaultValue: undefined,
    intent: Intent.NONE,
};
SegmentedControl.displayName = `${DISPLAYNAME_PREFIX}.SegmentedControl`;
function SegmentedControlOption({ isSelected, label, onClick, value, ...buttonProps }) {
    const handleClick = React.useCallback((event) => onClick?.(value, event.currentTarget), [onClick, value]);
    return React.createElement(Button, { onClick: handleClick, minimal: !isSelected, text: label, ...buttonProps });
}
SegmentedControlOption.displayName = `${DISPLAYNAME_PREFIX}.SegmentedControlOption`;
//# sourceMappingURL=segmentedControl.js.map