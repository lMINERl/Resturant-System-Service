import React from 'react';
import { shallow } from 'enzyme';
import GroupOrder from './GroupOrder';

describe('<GroupOrder />', () => {
  test('renders', () => {
    const wrapper = shallow(<GroupOrder />);
    expect(wrapper).toMatchSnapshot();
  });
});
