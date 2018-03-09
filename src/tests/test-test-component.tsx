import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import TestComponent from '../ts/views/test-component';

test('first test - test that test component has proper', (t) => {
    const wrapper = shallow(<TestComponent name={'testName'} />);
    t.true(wrapper.hasClass('test-component-class'));
});

test('tests whether children get passed in', (t) => {
  const wrapper = shallow(
    <TestComponent name={'testName'}>
      <div className="child" />
    </TestComponent>
  );
  t.true(wrapper.contains(<div className="child"/>));
});
