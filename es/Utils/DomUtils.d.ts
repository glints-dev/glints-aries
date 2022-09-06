/**
 * Returns a value when ESC button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */
export declare function escEvent(value: () => any): (e: KeyboardEvent) => any;
/**
 * Returns a value when Tab button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */
export declare function tabEvent(value: () => any): (e: KeyboardEvent) => any;
