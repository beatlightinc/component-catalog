import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Textarea from '../../../ts/views/inputs/textarea';

const handleChangeSpy = sinon.spy();

test('Textarea onChange doesnt get called if disabled, with correct classnames', (t) => {
  let value: string;
  const wrapper = shallow(<Textarea value={value} disabled={true} onHandleChange={handleChangeSpy}/>);
  wrapper.find('.input-component').simulate('change', {target: {value: 'My new value'}});
  t.is(handleChangeSpy.called, false);
  t.is(wrapper.hasClass('input-container disabled'), true);
  t.is(wrapper.containsMatchingElement(<textarea className="input-component disabled"/>), true);
});

test('Textarea handles value changes properly, with correct classnames', (t) => {
  let value: string;
  const wrapper = shallow(<Textarea value={value} onHandleChange={handleChangeSpy}/>);
  wrapper.find('.input-component').simulate('change', {target: {value: 'My new value'}});
  t.is(handleChangeSpy.called, true);
  t.is(wrapper.hasClass('input-container'), true);
  t.is(wrapper.containsMatchingElement(<textarea className="input-component"/>), true);
});
