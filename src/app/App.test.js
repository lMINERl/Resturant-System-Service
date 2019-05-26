const { React, ReactDOM, renderer, configure, shallow, Adapter, enzymeSerializer } = require('../test/config');
const { App, add } = require('./App');

describe('just a fake test', () => {
  test('fake test', () => {
    expect(true).toBeTruthy();
  });
  test('function add', () => {
    // success test
    expect(add(1, 2)).toBe(3);

    // fail test
    // expect(add(1,2)).toBe(4);
  })
});

// test shallow component
describe('component', () => {
  test('on routing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div>App</div>)).toEqual(true);
  });
});

