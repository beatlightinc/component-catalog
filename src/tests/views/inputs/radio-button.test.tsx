import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import RadioButton from '../../../ts/views/inputs/radio-button';

const onClickSpy = sinon.spy();

test('Clicking a disabled radio button should not call the onClick', (t) => {
  const wrapper = shallow(<RadioButton label="One" disabled onClick={onClickSpy} activeLabel="Two" />);
  wrapper.simulate('click');
  t.is(onClickSpy.called, false);
});

test('Clicking a radio button calls the onClick with the appropriate arg', (t) => {
  const wrapper = shallow(<RadioButton label="One" onClick={onClickSpy} activeLabel="Two" />);
  wrapper.simulate('click');
  t.is(onClickSpy.calledWith('One'), true);
});
