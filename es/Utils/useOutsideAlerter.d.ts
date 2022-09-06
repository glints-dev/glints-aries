import { MutableRefObject } from 'react';
/**
 * Hook that alerts clicks outside of the passed ref
 */
export declare const useOutsideAlerter: (ref: MutableRefObject<HTMLElement>, callback: () => void) => void;
