import React from 'react';
import { shallow } from 'enzyme';
import ResturantDetails from './ResturantDetails';

describe('<ResturantDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<ResturantDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
