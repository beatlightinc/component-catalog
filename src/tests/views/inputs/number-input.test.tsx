import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import NumberInput from '../../../ts/views/inputs/number-input';

const handleChangeSpy = sinon.spy();

test('clicking the buttons on a disabled NumberInput has no effect', (t) => {
  const wrapper = shallow(<NumberInput value={1} handleChange={handleChangeSpy} disabled/>);
  wrapper.find('.up').first().simulate('click');
  t.is(handleChangeSpy.called, false);
});

test('NumberInput cannot reach a value outside of the min/max range if there is one', (t) => {
  const wrapper = shallow(<NumberInput value={1} handleChange={handleChangeSpy} max={1} min={1}/>);
  wrapper.find('.up').first().simulate('click');
  wrapper.find('.down').first().simulate('click');
  t.is(handleChangeSpy.called, false);
});

test('NumberInput handles increment / decrement appropriately', (t) => {
  const wrapper = shallow(<NumberInput value={1} handleChange={handleChangeSpy}/>);
  wrapper.find('.up').first().simulate('click');
  t.is(handleChangeSpy.calledWith(2), true);
});
