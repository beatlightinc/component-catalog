import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Checkbox from '../../../ts/views/inputs/checkbox';

const onClickSpy = sinon.spy();

test('Clicking a disabled checkbox should not call its onclick handler', (t) => {
  const checkboxWrapper = shallow(<Checkbox onClick={onClickSpy} disabled={true} /> );
  checkboxWrapper.find('input').simulate('click');
  t.is(onClickSpy.called, false);
});

test('Disabled checkbox gets proper classnames', (t) => {
  const checkBoxWrapper = shallow(<Checkbox disabled={true} />);
  t.is(checkBoxWrapper.hasClass('checkbox-component-wrapper disabled'), true);
});
