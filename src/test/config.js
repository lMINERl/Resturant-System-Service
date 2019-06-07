const React =require('react');
const ReactDOM = require('react-dom');
const renderer = require('react-test-renderer');

const { configure, shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const enzymeSerializer = require('enzyme-to-json/serializer');

expect.addSnapshotSerializer(enzymeSerializer);
configure({ adapter: new Adapter() });

export {React,ReactDOM,renderer,configure,shallow,Adapter,enzymeSerializer};