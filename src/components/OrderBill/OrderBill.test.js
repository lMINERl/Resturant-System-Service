import React from 'react';
import { shallow } from 'enzyme';
import OrderBill from './OrderBill';

describe('<OrderBill />', () => {
  test('renders', () => {
    const wrapper = shallow(<OrderBill />);
    expect(wrapper).toMatchSnapshot();
  });
});
