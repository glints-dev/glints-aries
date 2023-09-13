import React, {
  ClipboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { StyledInputsContainer } from './AuthenticationInputStyle';
import { AuthenticationInputSingle } from './AuthenticationInputSingle';

export interface AuthenticationInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  numberOfInputs: number;
  disabled?: boolean;
  error?: boolean;
  forwardedRef?: RefObject<HTMLDivElement>;
  /** will always return null when not all inputs are filled */
  onChange?: (value: string | null) => void;
}
const AuthenticationInputComponent = ({
  numberOfInputs = 6,
  error,
  onChange,
  forwardedRef,
  ...rest
}: AuthenticationInputProps) => {
  const [inputValues, setInputValues] = useState(
    new Array<number | ''>(numberOfInputs).fill('')
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputArray = new Array(numberOfInputs).fill('');

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    if (inputValues.some(v => !Number.isInteger(v))) {
      onChangeRef.current?.(null);
      return;
    }
    onChangeRef.current?.(inputValues.join(''));
  }, [inputValues]);

  const handleOnChange = (value: number, index: number) => {
    if (!Number.isInteger(value)) {
      const newInputValues = [...inputValues];
      newInputValues[index] = '';
      setInputValues(newInputValues);
      return;
    }
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    const nextInputIndex = index + 1;

    if (nextInputIndex <= numberOfInputs - 1) {
      setCurrentIndex(nextInputIndex);
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    const pastedData = event.clipboardData.getData('text') || '';
    event.preventDefault();
    const pastedDataArray = pastedData.split('');
    if (pastedDataArray.length === 0) {
      return;
    }

    const newValues = new Array<number>(numberOfInputs).fill(null);

    for (let i = 0; i < numberOfInputs; i++) {
      const currentValue =
        i >= pastedDataArray.length ? null : pastedDataArray[i];

      const currentValueAsNumber = Number(currentValue);

      if (Number.isNaN(currentValueAsNumber)) {
        console.warn(`${currentValue} is not a number, paste is skipped`);
        continue;
      }
      newValues[i] = currentValueAsNumber;
    }
    setInputValues(newValues);
    setCurrentIndex(numberOfInputs - 1);
  };

  return (
    <StyledInputsContainer
      className="authentication-inputs-container"
      onPaste={handlePaste}
      ref={forwardedRef}
    >
      {inputArray.map((_value, index) => {
        return (
          <AuthenticationInputSingle
            key={index}
            className="authentication-input"
            index={index}
            shouldFocus={currentIndex === index}
            isLast={index === numberOfInputs - 1}
            onChange={handleOnChange}
            value={inputValues[index]}
            error={error}
            onPaste={handlePaste}
            onIndexChanged={index => {
              if (index >= numberOfInputs || index < 0) {
                return;
              }
              setCurrentIndex(index);
            }}
            {...rest}
          />
        );
      })}
    </StyledInputsContainer>
  );
};

const forwardRef = (
  props: AuthenticationInputProps,
  ref: RefObject<HTMLDivElement>
) => <AuthenticationInputComponent {...props} forwardedRef={ref} />;

forwardRef.displayName = AuthenticationInputComponent.name;

export const AuthenticationInput = React.forwardRef(forwardRef);
