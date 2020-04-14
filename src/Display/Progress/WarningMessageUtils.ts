import { capitalize } from 'lodash';

const generateInvalidPropValueMessage = (component: string) =>
  `Invalid prop value on ${capitalize(component)} component: `;

const generateExpectedAndActualPropMessage = (
  propName: string,
  expectedPropTypeAndValue: string,
  actualProp: string
) =>
  `${propName} prop expected a ${expectedPropTypeAndValue} but\ received ${actualProp} instead. `;

const generateResolvedPropMessage = (resolvedPropValue: string) =>
  `We resolved the value to ${resolvedPropValue} to ensure it continues working as expected.\ `;

const generateComponentDocumentationMessage = (documentationURL: string) =>
  `Visit ${documentationURL} for more information on the components' behaviour.`;

const generateWarningMessage = (messageProps: MessageProps) => {
  return (
    generateInvalidPropValueMessage(messageProps.component) +
    generateExpectedAndActualPropMessage(
      messageProps.propName,
      messageProps.expectedPropTypeAndValue,
      messageProps.actualProp
    ) +
    generateResolvedPropMessage(messageProps.resolvedPropValue) +
    generateComponentDocumentationMessage(messageProps.documentationURL)
  );
};

const makeShowWarningMessage = (defaultMessageProps: DefaultMessageProps) => (
  messageProps: MessageProps
) =>
  console.warn(
    generateWarningMessage({ ...messageProps, ...defaultMessageProps })
  );

const makeReducerToPairWarningMessagesWithShowMessageFn = (
  defaultMessageProps: DefaultMessageProps
) => {
  const showWarningMessageWithDefaultProps = makeShowWarningMessage(
    defaultMessageProps
  );
  const reducer = (accumulator: object, currentWarningMessage: string) => ({
    ...accumulator,
    [currentWarningMessage]: showWarningMessageWithDefaultProps,
  });
  return reducer;
};

export const generateWarningMessages = (
  warningMessageTypes: string[],
  defaultWarningMessageProps: DefaultMessageProps
) => {
  const pairWarningMessagesWithShowMessageFn = makeReducerToPairWarningMessagesWithShowMessageFn(
    defaultWarningMessageProps
  );
  return warningMessageTypes.reduce(pairWarningMessagesWithShowMessageFn, {});
};

interface MessageProps {
  component: string;
  documentationURL: string;
  propName: string;
  expectedPropTypeAndValue: string;
  actualProp: any;
  resolvedPropValue: any;
}

interface DefaultMessageProps {
  component: string;
  documentationURL: string;
  propName?: string;
  expectedPropTypeAndValue?: string;
  actualProp?: any;
  resolvedPropValue?: any;
}
