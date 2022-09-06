import { useEffect } from 'react';
/**
 * Hook that alerts clicks outside of the passed ref
 */

export var useOutsideAlerter = function useOutsideAlerter(ref, callback) {
  useEffect(function callCallbackOnOutsideClick() {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
};