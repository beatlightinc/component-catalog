import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import TestComponent from '../ts/views/test-component';

configure({ adapter: new Adapter() });

test('first test - make sure html structure is equal for test component', (t) => {
    const actual = shallow(<TestComponent name={'testName'} />);
    const expected = shallow(
        <div className="test-component-class">testName</div>
    );
    console.log(expected);
    console.log(actual);
    t.is(actual, expected);
});
