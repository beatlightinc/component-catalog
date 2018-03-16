const Adapter = require('enzyme-adapter-react-16');
const { configure } = require('enzyme');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

configure({ adapter: new Adapter() });
