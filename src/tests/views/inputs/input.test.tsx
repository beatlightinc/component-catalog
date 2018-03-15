import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Input from '../../../ts/views/inputs/input';
import Button from '../../../ts/views/buttons/button';

test('<Input /> onChange does not get called if disabled', (t) => {
  const handleChange = sinon.spy();
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    onHandleChange={handleChange}
    disabled={true}/>);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  t.is(handleChange.called, false);
});

test('<Input /> gets correct classname if disabled', (t) => {
  const inputSpy = sinon.spy();
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={true}
    onHandleChange={inputSpy}
    disabled={true}
    />);
  t.is(wrapper.hasClass('input disabled'), true);
});

test('<Input /> passed in function gets called if not disabled', (t) => {
  const inputSpy = sinon.spy();
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    onHandleChange={inputSpy}
    disabled={false}
    />);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  t.is(inputSpy.called, true);
});
