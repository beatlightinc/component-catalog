import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import ProgressTabs from '../../../ts/views/widgets/progress-tabs';

const onClickSpy = sinon.spy();

const tabNames = ['one', 'two', 'three'];

test('ProgressTabs get correct number of dots, as well as correct active step', (t) => {
  const wrapper = shallow(<ProgressTabs tabNames={tabNames} currentTab={2} tabOnClick={onClickSpy}/>);
  t.is(wrapper.hasClass('progress-tabs-wrapper'), true);
  t.is(wrapper.find('.tab').length, 3);
  t.is(wrapper.find('.clickable').length, 2);
  t.is(wrapper.find('.active').length, 1);
});

test('ProgressTabs maintains only one current step after being clicked', (t) => {
  const wrapper = shallow(<ProgressTabs tabNames={tabNames} currentTab={2} tabOnClick={onClickSpy}/>);
  wrapper.find('.tab').first().simulate('click');
  t.is(onClickSpy.calledWith(0), true);
  t.is(wrapper.find('.clickable').length, 2);
  t.is(wrapper.find('.active').length, 1);
});
