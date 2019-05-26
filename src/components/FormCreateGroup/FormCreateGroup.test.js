import React from 'react';
import { shallow } from 'enzyme';
import FormCreateGroup from './FormCreateGroup';

describe('<FormCreateGroup />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormCreateGroup />);
    expect(wrapper).toMatchSnapshot();
  });
});
