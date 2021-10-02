import { MutableRefObject, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (
  ref: MutableRefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(
    function callCallbackOnOutsideClick() {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [callback, ref]
  );
};
