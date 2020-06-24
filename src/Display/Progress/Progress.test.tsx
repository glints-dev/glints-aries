import * as React from 'react';
import Progress from './Progress';
import { PrimaryColor, SecondaryColor } from '../../Utils/Colors';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

it(`<Progress> should render 51% with a stroke color of ${SecondaryColor.orange}`, () => {
  const ProgressSnapshot = renderer
    .create(<Progress percentage={51} percentageRange={[15, 60]} />)
    .toJSON();
  expect(ProgressSnapshot).toMatchSnapshot();
});

it('displays the percentage completion rate', () => {
  const percentage = 51;
  const { getByLabelText } = render(<Progress percentage={percentage} />);
  const percentageCompletion = getByLabelText('percentage-completion');
  expect(percentageCompletion).toHaveTextContent(`${percentage}%`);
});

describe('displays "0% complete" when it renders with invalid values:', () => {
  const invalidPercentages: any[] = [null, undefined, NaN];
  invalidPercentages.forEach(invalidPercentage => {
    it(`${invalidPercentage}`, () => {
      const { getByLabelText } = render(
        <Progress percentage={invalidPercentage} />
      );
      const percentageCompletion = getByLabelText('percentage-completion');
      expect(percentageCompletion).toHaveTextContent(/^0%$/);
    });
  });
});

describe('displays correct colors with a percentageRange of [15, 60]:', () => {
  const percentageRange = [15, 60];
  const [firstNumber, secondNumber] = percentageRange;
  const colorRange = {
    [firstNumber]: PrimaryColor.glintsred,
    [secondNumber]: SecondaryColor.orange,
    [secondNumber + 1]: SecondaryColor.green,
  };
  Object.keys(colorRange).forEach((range: any) => {
    const color = colorRange[range];
    it(`should display ${color} when percentage = ${range}`, () => {
      const { getByLabelText } = render(
        <Progress
          percentage={Number(range)}
          percentageRange={percentageRange}
        />
      );
      const progressCircle = getByLabelText('progress-circle-value');
      expect(progressCircle).toHaveAttribute('stroke', color);
    });
  });
});

describe('displays correct colors with a percentageRange of [40]:', () => {
  const percentageRange = [40];
  const colorRange = {
    [percentageRange[0]]: SecondaryColor.orange,
    [percentageRange[0] + 1]: SecondaryColor.green,
  };
  Object.keys(colorRange).forEach((range: any) => {
    const color = colorRange[range];
    it(`should display ${color} when percentage = ${range}`, () => {
      const { getByLabelText } = render(
        <Progress
          percentage={Number(range)}
          percentageRange={percentageRange}
        />
      );
      const progressCircle = getByLabelText('progress-circle-value');
      expect(progressCircle).toHaveAttribute('stroke', color);
    });
  });
});
