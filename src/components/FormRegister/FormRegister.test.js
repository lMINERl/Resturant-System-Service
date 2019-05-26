import React from 'react';
import { shallow } from 'enzyme';
import FormRegister from './FormRegister';

describe('<FormRegister />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormRegister />);
    expect(wrapper).toMatchSnapshot();
  });
});
