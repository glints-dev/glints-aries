import * as React from 'react';
import Progress from './Progress'
import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('shows percentage completion rate when it renders with a valid percentage', () => {
  const percentage = 51
  const { getByLabelText } = render(<Progress percentage={percentage} />)
  const percentageCompletion = getByLabelText('percentage-completion')
  expect(percentageCompletion).toHaveTextContent(`${percentage}%`)
})

describe('shows "0% complete" when it renders with invalid values', () => {
  const invalidPercentages: any[] = [null, undefined]
  invalidPercentages.forEach((invalidPercentage) =>{
    test(`${invalidPercentage}`, () => {
      const { getByLabelText } = render(<Progress percentage={invalidPercentage} />)
      const percentageCompletion = getByLabelText('percentage-completion')
      expect(percentageCompletion).toHaveTextContent(/^0%$/)
    })
  })
})

describe('shows correct colors with a percentageRange of [15, 60]', () => {
  const percentageRange = [15, 60]
  const [firstNumber, secondNumber] = percentageRange
  const colorRange = {
    [firstNumber]: PrimaryColor.glintsred, 
    [secondNumber]: SecondaryColor.orange, 
    [secondNumber + 1]: SecondaryColor.green,
  }
  Object.keys(colorRange).forEach((range: any) => {
    const color = colorRange[range]
    test(`should show ${color} when percentage = ${range}`, () => {
      const { getByLabelText } = render(<Progress percentage={Number(range)} percentageRange={percentageRange} />)
      const progressCircle = getByLabelText('progress-circle-value')
      expect(progressCircle).toHaveAttribute('stroke', color)
    })
  })
})

describe('shows correct colors with a percentageRange of [40]', () => {
  const percentageRange = [40]
  const colorRange = {
    [percentageRange[0]]: SecondaryColor.orange, 
    [percentageRange[0] + 1]: SecondaryColor.green,
  }
  Object.keys(colorRange).forEach((range: any) => {
    const color = colorRange[range]
    test(`should show ${color} when percentage = ${range}`, () => {
      const { getByLabelText } = render(<Progress percentage={Number(range)} percentageRange={percentageRange} />)
      const progressCircle = getByLabelText('progress-circle-value')
      expect(progressCircle).toHaveAttribute('stroke', color)
    })
  })
})
