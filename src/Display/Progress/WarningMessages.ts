import { generateWarningMessages } from './WarningMessageUtils';

const defaultWarningMessageProps = {
  component: 'progress',
  documentationURL:
    'http://glints-aries.surge.sh/?selectedKind=Display&selectedStory=Progress&full=0',
};

const warningMessageTypes = [
  'percentageValueOutsideRange',
  'percentageTypeInvalid',
  'percentageRangeExceedsValidLength',
  'sizeValueInvalid',
];

export const warningMessages = generateWarningMessages(
  warningMessageTypes,
  defaultWarningMessageProps
) as ProgressWarningMessageTypes;

interface ProgressWarningMessageTypes {
  percentageValueOutsideRange: Function;
  percentageTypeInvalid: Function;
  percentageRangeExceedsValidLength: Function;
  sizeValueInvalid: Function;
}
