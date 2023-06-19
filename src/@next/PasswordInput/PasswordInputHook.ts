// source: https://github.com/nikpl7777/react-mimic-password-hook
import React from 'react';

export const makeSearchMaskRegExp = (
  cursorPos: number,
  mask: string
): RegExp => {
  if (cursorPos) {
    return new RegExp(`(^\\${mask}{1,${cursorPos}})|(\\${mask}+)`, 'g');
  }

  return new RegExp(`(\\${mask}+)`, 'g');
};

type HTMLTextInputElement = HTMLInputElement | HTMLTextAreaElement;

type NextValueString = string & { kind: 'nextValue' };

type Props<T extends HTMLTextInputElement> = {
  /** Masking symbol. **'•'** by default */
  readonly mask?: string;
  /** Delay while entered symbol is visible in miliseconds. **1000** by default */
  readonly delay?: number;
  /** Custom onChange handler. Accepts two arguments: real input value and the original event. */
  readonly handleChange?: (newValue: string, e: React.ChangeEvent<T>) => void;
  /** Mode. `persymbol`: only last symbol to be visible. `delayed`: input is only hidden after time elapsed. */
  readonly mode?: 'persymbol' | 'delayed';
};

export type UseMimicPasswordProps<T extends HTMLTextInputElement> = Props<T>;

const defaults: Props<HTMLTextInputElement> = {
  mask: '•',
  delay: 1000,
  mode: 'delayed',
};

type Settings<T extends HTMLTextInputElement> = Required<
  Pick<Props<T>, keyof typeof defaults>
> &
  Props<T>;

export type UseMimicReturn<T extends HTMLTextInputElement> = [
  string,
  string,
  (e: React.ChangeEvent<T>) => NextValueString
];

export const useMimicPassword = <T extends HTMLTextInputElement>(
  props?: UseMimicPasswordProps<T>
): UseMimicReturn<T> => {
  const { mask, delay, mode, handleChange } = React.useMemo(
    () => ({ ...defaults, ...props } as Settings<T>),
    [props]
  );

  if (mask.length !== 1) {
    throw new Error('`mask` should be a string with only one symbol.');
  }

  const timer = React.useRef<number | undefined>();
  const cursorPos = React.useRef<number>(0);
  const inputRef = React.useRef<T | null>(null);

  const [value, setValue] = React.useState('');
  const [presentation, setPresentation] = React.useState('');
  const [futurePresentation, setFuturePresentation] = React.useState('');

  const onChange = React.useCallback(
    (e: React.ChangeEvent<T>): NextValueString => {
      inputRef.current = e.target;

      cursorPos.current = inputRef.current.selectionEnd || 0;
      const inputValue = inputRef.current.value;

      // This is going to be the new original value (unmasked)
      const newValue = inputValue.replace(
        makeSearchMaskRegExp(cursorPos.current, mask),
        (match, _, offset) => {
          if (!offset && cursorPos.current) {
            return value.substring(0, match.length);
          }

          return value.substring(-match.length);
        }
      );

      let newPresentantion = '';

      // Mask the value leaving the last character entered intact
      if (mode === 'persymbol') {
        newPresentantion = inputValue
          .split('')
          .map((c, index) => (index === cursorPos.current - 1 ? c : mask))
          .join('');
      } else {
        // Keep entered value as is until timer hides everything
        newPresentantion = inputValue;
      }

      setValue(newValue);
      setPresentation(newPresentantion);
      setFuturePresentation(new Array(inputValue.length + 1).join(mask));

      if (typeof handleChange === 'function') {
        handleChange(newValue, e);
      }

      return newValue as NextValueString;
    },
    [timer, delay, mask, presentation, value, cursorPos]
  );

  // Restore cursor position once presentation has changed
  React.useEffect(() => {
    inputRef.current?.setSelectionRange(cursorPos.current, cursorPos.current);
  }, [presentation, inputRef, cursorPos]);

  // Set futurePresentation as presentation after the timeout
  React.useEffect(() => {
    if (presentation !== futurePresentation && futurePresentation) {
      clearTimeout(timer.current);
      timer.current = setTimeout(
        () => setPresentation(futurePresentation),
        delay
      ) as unknown as number;
    }

    return () => clearTimeout(timer.current);
  }, [timer, presentation, futurePresentation, delay]);

  return [value, presentation, onChange];
};
