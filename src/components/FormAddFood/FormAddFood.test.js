import React from 'react';
import { shallow } from 'enzyme';
import FormAddFood from './FormAddFood';

describe('<FormAddFood />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormAddFood />);
    expect(wrapper).toMatchSnapshot();
  });
});
