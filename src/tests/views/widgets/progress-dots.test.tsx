import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import ProgressDots from '../../../ts/views/widgets/progress-dots';

const onClickSpy = sinon.spy();

test('ProgressDots get correct number of dots, as well as correct active step', (t) => {
  const wrapper = shallow(<ProgressDots totalSteps={3} currentStep={2} stepOnClick={onClickSpy}/>);
  t.is(wrapper.hasClass('progress-dots-wrapper'), true);
  t.is(wrapper.find('.dot').length, 3);
  t.is(wrapper.find('.clickable').length, 2);
  t.is(wrapper.find('.active').length, 1);
});

test('ProgressDots maintains only one current step after being clicked', (t) => {
  const wrapper = shallow(<ProgressDots totalSteps={3} currentStep={2} stepOnClick={onClickSpy}/>);
  wrapper.find('.dot').first().simulate('click');
  t.is(onClickSpy.calledWith(0), true);
  t.is(wrapper.find('.clickable').length, 2);
  t.is(wrapper.find('.active').length, 1);
});
