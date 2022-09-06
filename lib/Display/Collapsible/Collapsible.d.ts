import { HTMLAttributes, FC, ReactNode } from 'react';
export declare const Collapsible: FC<Props>;
export interface Props extends HTMLAttributes<HTMLDivElement> {
    label: ReactNode;
    isOpen?: boolean;
}
export default Collapsible;
