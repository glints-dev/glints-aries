import * as React from 'react';
export interface ToggleSwitchProps {
    /** Determines whether the ToggleSwitch is in an active state */
    active?: boolean;
    /** This will determine whether or not the component renders with an active or inactive state at the start. */
    defaultActive?: boolean;
    /** The icon components that will be used in both active and inactive states. Both icons have to be defined when opting to use this. */
    iconOptions?: {
        active: React.ReactType;
        inactive: React.ReactType;
    };
    /** Called when the state of the toggle has been changed. Called with true or false depending on whether the toggle became active or inactive. */
    onChange?: (active: boolean) => void;
    className?: string;
}
/** The className and ...defaultProps are passed to the main toggle container. */
export declare const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps>;
export default ToggleSwitch;
