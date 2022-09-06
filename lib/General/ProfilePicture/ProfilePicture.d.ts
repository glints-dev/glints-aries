import * as React from 'react';
import { ProfilePictureContainer } from './ProfilePictureStyle';
declare const ProfilePicture: ({ editable, children, className, ...defaultProps }: Props) => JSX.Element;
export declare type Props = React.ComponentPropsWithoutRef<typeof ProfilePictureContainer> & {
    /** Showing edit icon when it's hovered. */
    editable?: boolean;
    children: React.ReactNode;
};
export default ProfilePicture;
