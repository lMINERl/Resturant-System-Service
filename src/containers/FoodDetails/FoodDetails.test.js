import React from 'react';
import { shallow } from 'enzyme';
import FoodDetails from './FoodDetails';

describe('<FoodDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<FoodDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
