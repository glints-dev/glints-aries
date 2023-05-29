export const debounce = (func: any, delay = 500) => {
  let timeoutID: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
