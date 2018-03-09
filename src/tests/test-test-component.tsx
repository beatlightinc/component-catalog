import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import TestComponent from '../ts/views/test-component';

configure({ adapter: new Adapter() });

test('first test - test for css classname', (t) => {
    const wrapper = shallow(<TestComponent name={'testName'} />);
    t.true(wrapper.hasClass('test-component-class'));
});
