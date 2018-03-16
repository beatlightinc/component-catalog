import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from '../../../ts/views/buttons/button';

test('button onclick and text work if passed in', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(<Button buttonText="something" onClick={onClickSpy}/>);
  wrapper.simulate('click');
  t.is(onClickSpy.called, true);
  t.is(wrapper.text(), 'something');
});

test('button onclick will not fire if disabled prop, classname gets passed in', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(
    <Button buttonText="something else"
      onClick={onClickSpy}
      disabled={true}
      className="button-class-name"/>
    );
  wrapper.simulate('click');
  t.is(onClickSpy.called, false);
  t.is(wrapper.hasClass('button-class-name'), true);
});