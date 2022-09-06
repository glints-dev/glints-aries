/// <reference types="react" />
export declare const Alert: ({ isOpen: externalIsVisible, autoClose, onClose: externalOnClose, type, className, message, }: Props) => JSX.Element;
export declare type AlertType = 'success' | 'warning' | 'danger' | 'info';
export interface Props {
    /** Set Alert's style. */
    type?: AlertType;
    /** Set message for Alert. */
    message: string;
    /** A function to close Alert. onClose will be triggered if the close icon is clicked or the Alert has ran its autoClose duration or ESC/Enter is pressed */
    onClose(): void;
    /** Set Alert to show. */
    isOpen?: boolean;
    /** Set classname for Alert. */
    className?: string;
    /** Set period for Alert to close by itself. The value is in millisecond. */
    autoClose?: number;
}
export default Alert;
