import { React, ReactDOM, renderer, configure, shallow, Adapter, enzymeSerializer } from '../test/config';
import { App } from './App';

describe('just a fake test', () => {
  test('fake test', () => {
    expect(true).toBeTruthy();
  });
  
});

// test shallow component
describe('component', () => {
  test('on routing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div>App</div>)).toEqual(true);
  });
});

