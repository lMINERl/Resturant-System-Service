import React from 'react';
import { shallow } from 'enzyme';
import ProfileFavCuisins from './ProfileFavCuisins';

describe('<ProfileFavCuisins />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProfileFavCuisins />);
    expect(wrapper).toMatchSnapshot();
  });
});
