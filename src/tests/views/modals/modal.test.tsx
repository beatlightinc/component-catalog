import * as React from 'react';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Modal from '../../../ts/views/modals/modal';

const onCloseSpy = sinon.spy();

test('Modal is not displaying when its not supposed to be showing', (t) => {
  const wrapper = shallow(<Modal onClose={onCloseSpy} showing={false} wrapperClassName="testName"/>);
  t.is(wrapper.find('.showing').length < 1, true);
  t.is(wrapper.find('.testName').length === 1, true);
});

test('Modal contains children passed in', (t) => {
  const wrapper = shallow(
    <Modal onClose={onCloseSpy} showing={true}>
      <div className="child-class"></div>
    </Modal>
  );
  t.is(wrapper.find('.child-class').length === 1, true);
});

test('Modal registers closeOnClick', (t) => {
  const wrapper = shallow(<Modal onClose={onCloseSpy} showing={true} wrapperClassName="testName"/>);
  wrapper.find('.close-button').first().simulate('click');
  t.is(onCloseSpy.called, true);
});
