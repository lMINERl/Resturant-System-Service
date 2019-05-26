import React from 'react';
import { shallow } from 'enzyme';
import CardListing from './CardListing';

describe('<CardListing />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardListing />);
    expect(wrapper).toMatchSnapshot();
  });
});
