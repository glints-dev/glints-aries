// DOM utilities

/**
 * Returns a value when ESC button is triggered.
 *
 * @param  {Boolean} value
 * @return {Boolean}
 */
export function escEvent(value) {
  const listener = (e) => {
    if (e.keyCode === 27) {
      return value();
    }
    return 0;
  };

  return listener;
}
