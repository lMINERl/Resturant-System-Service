import React from 'react';
import { shallow } from 'enzyme';
import FormCreateResturant from './FormCreateResturant';

describe('<FormCreateResturant />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormCreateResturant />);
    expect(wrapper).toMatchSnapshot();
  });
});
