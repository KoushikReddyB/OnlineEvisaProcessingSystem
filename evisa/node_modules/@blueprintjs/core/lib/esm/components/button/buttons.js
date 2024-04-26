/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
import { __assign } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, Utils } from "../../common";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from "../../common/props";
import { mergeRefs } from "../../common/refs";
import { Icon } from "../icon/icon";
import { Spinner, SpinnerSize } from "../spinner/spinner";
import { Text } from "../text/text";
/**
 * Button component.
 *
 * @see https://blueprintjs.com/docs/#core/components/button
 */
export var Button = React.forwardRef(function (props, ref) {
    var commonAttributes = useSharedButtonAttributes(props, ref);
    return (React.createElement("button", __assign({ type: "button" }, removeNonHTMLProps(props), commonAttributes), renderButtonContents(props)));
});
Button.displayName = "".concat(DISPLAYNAME_PREFIX, ".Button");
/**
 * AnchorButton component.
 *
 * @see https://blueprintjs.com/docs/#core/components/button
 */
export var AnchorButton = React.forwardRef(function (props, ref) {
    var href = props.href, _a = props.tabIndex, tabIndex = _a === void 0 ? 0 : _a;
    var commonProps = useSharedButtonAttributes(props, ref);
    return (React.createElement("a", __assign({ role: "button" }, removeNonHTMLProps(props), commonProps, { "aria-disabled": commonProps.disabled, href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? -1 : tabIndex }), renderButtonContents(props)));
});
AnchorButton.displayName = "".concat(DISPLAYNAME_PREFIX, ".AnchorButton");
/**
 * Most of the button logic lives in this shared hook.
 */
function useSharedButtonAttributes(props, ref) {
    var _a;
    var _b = props.active, active = _b === void 0 ? false : _b, alignText = props.alignText, fill = props.fill, large = props.large, _c = props.loading, loading = _c === void 0 ? false : _c, minimal = props.minimal, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, outlined = props.outlined, small = props.small, tabIndex = props.tabIndex;
    var disabled = props.disabled || loading;
    // the current key being pressed
    var _d = React.useState(), currentKeyPressed = _d[0], setCurrentKeyPressed = _d[1];
    // whether the button is in "active" state
    var _e = React.useState(false), isActive = _e[0], setIsActive = _e[1];
    // our local ref for the button element, merged with the consumer's own ref (if supplied) in this hook's return value
    var buttonRef = React.useRef(null);
    var handleBlur = React.useCallback(function (e) {
        if (isActive) {
            setIsActive(false);
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    }, [isActive, onBlur]);
    var handleKeyDown = React.useCallback(function (e) {
        if (Utils.isKeyboardClick(e)) {
            e.preventDefault();
            if (e.key !== currentKeyPressed) {
                setIsActive(true);
            }
        }
        setCurrentKeyPressed(e.key);
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    }, [currentKeyPressed, onKeyDown]);
    var handleKeyUp = React.useCallback(function (e) {
        var _a;
        if (Utils.isKeyboardClick(e)) {
            setIsActive(false);
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
        }
        setCurrentKeyPressed(undefined);
        onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(e);
    }, [onKeyUp]);
    var className = classNames(Classes.BUTTON, (_a = {},
        _a[Classes.ACTIVE] = !disabled && (active || isActive),
        _a[Classes.DISABLED] = disabled,
        _a[Classes.FILL] = fill,
        _a[Classes.LARGE] = large,
        _a[Classes.LOADING] = loading,
        _a[Classes.MINIMAL] = minimal,
        _a[Classes.OUTLINED] = outlined,
        _a[Classes.SMALL] = small,
        _a), Classes.alignmentClass(alignText), Classes.intentClass(props.intent), props.className);
    return {
        className: className,
        disabled: disabled,
        onBlur: handleBlur,
        onClick: disabled ? undefined : props.onClick,
        onFocus: disabled ? undefined : props.onFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        ref: mergeRefs(buttonRef, ref),
        tabIndex: disabled ? -1 : tabIndex,
    };
}
/**
 * Shared rendering code for button contents.
 */
function renderButtonContents(props) {
    var children = props.children, ellipsizeText = props.ellipsizeText, icon = props.icon, loading = props.loading, rightIcon = props.rightIcon, text = props.text, textClassName = props.textClassName;
    var hasTextContent = !Utils.isReactNodeEmpty(text) || !Utils.isReactNodeEmpty(children);
    return (React.createElement(React.Fragment, null,
        loading && React.createElement(Spinner, { key: "loading", className: Classes.BUTTON_SPINNER, size: SpinnerSize.SMALL }),
        React.createElement(Icon, { key: "leftIcon", icon: icon }),
        hasTextContent && (React.createElement(Text, { key: "text", className: classNames(Classes.BUTTON_TEXT, textClassName), ellipsize: ellipsizeText, tagName: "span" },
            text,
            children)
        // <span key="text" className={classNames(Classes.BUTTON_TEXT, textClassName)}>
        //     {text}
        //     {children}
        // </span>
        ),
        React.createElement(Icon, { key: "rightIcon", icon: rightIcon })));
}
//# sourceMappingURL=buttons.js.map