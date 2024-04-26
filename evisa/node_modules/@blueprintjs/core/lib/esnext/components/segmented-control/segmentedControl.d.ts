import * as React from "react";
import { Intent } from "../../common";
import { type ControlledValueProps, type OptionProps, type Props } from "../../common/props";
export type SegmentedControlIntent = typeof Intent.NONE | typeof Intent.PRIMARY;
/**
 * SegmentedControl component props.
 */
export interface SegmentedControlProps extends Props, ControlledValueProps<string>, React.RefAttributes<HTMLDivElement> {
    /**
     * Whether the control should take up the full width of its container.
     *
     * @default false
     */
    fill?: boolean;
    /**
     * Whether the control should appear as an inline element.
     */
    inline?: boolean;
    /**
     * Whether this control should use large buttons.
     *
     * @default false
     */
    large?: boolean;
    /**
     * Visual intent to apply to the selected value.
     */
    intent?: SegmentedControlIntent;
    /**
     * List of available options.
     */
    options: Array<OptionProps<string>>;
    /**
     * Whether this control should use small buttons.
     *
     * @default false
     */
    small?: boolean;
}
/**
 * Segmented control component.
 *
 * @see https://blueprintjs.com/docs/#core/components/segmented-control
 */
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
