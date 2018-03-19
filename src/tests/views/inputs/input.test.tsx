import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import * as jsdom from 'jsdom';
const { JSDOM } = jsdom;
import Input from '../../../ts/views/inputs/input';
import Button from '../../../ts/views/buttons/button';

const inputSpy = sinon.spy();

test('<Input /> onChange does not get called if disabled', (t) => {
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    onHandleChange={inputSpy}
    disabled={true}/>);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  t.is(inputSpy.called, false);
});

test('<Input /> passed in function gets called if not disabled', (t) => {
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    onHandleChange={inputSpy}
    disabled={false}
    />);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  t.is(inputSpy.called, true);
});

test('<Input /> wrapper and children elements get proper classnames if disabled', (t) => {
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={true}
    onHandleChange={inputSpy}
    disabled={true}
    />);
  // Test the wrapper
  t.is(wrapper.hasClass('input-container disabled'), true);
  t.is(wrapper.containsMatchingElement(<input className="input disabled"/>), true);
});

test('<Input /> wrapper and children elements get proper classnames if NOT disabled', (t) => {
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    onHandleChange={inputSpy}
    />);
  t.is(wrapper.hasClass('input-container disabled'), false);
  t.is(wrapper.containsMatchingElement(<input className="input disabled" />), false);
});
