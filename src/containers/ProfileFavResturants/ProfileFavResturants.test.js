import React from 'react';
import { shallow } from 'enzyme';
import ProfileFavResturants from './ProfileFavResturants';

describe('<ProfileFavResturants />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProfileFavResturants />);
    expect(wrapper).toMatchSnapshot();
  });
});
