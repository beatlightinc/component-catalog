import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
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

test('<Input /> container and input get correct classname if disabled', (t) => {
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={true}
    onHandleChange={inputSpy}
    disabled={true}
    />);
  t.is(wrapper.hasClass('input-container disabled'), true);
  t.is(wrapper.find('input').hasClass('input disabled'), true);
});
