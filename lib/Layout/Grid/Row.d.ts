import * as React from 'react';
declare const Row: React.FunctionComponent<Props>;
interface Props {
    children: React.ReactNode;
    /** Sets the align-content and align-items css properties for the row. */
    alignContent?: string;
    /** Sets the justfiy-content and justfiy-items css properties for the row. */
    justifyContent?: string;
}
export default Row;
