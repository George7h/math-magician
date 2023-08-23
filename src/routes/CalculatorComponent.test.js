import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorComponent from './CalculatorComponent';

test('Calculator component matches snapshot', () => {
  const tree = renderer.create(<CalculatorComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
