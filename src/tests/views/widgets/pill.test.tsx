import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Pill from '../../../ts/views/widgets/pill';

test('Pill renders as expected and onClick gets called', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(<Pill onClick={onClickSpy} type="red" removeable={true}>{'Test Pill'}</Pill>);
  wrapper.simulate('click');
  t.is(onClickSpy.called, true);
  t.is(wrapper.hasClass('pill red removeable'), true);
});
