import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Toast from '../../../ts/views/widgets/toast';

const wait = (delay = 1000) => new Promise((resolve) => setTimeout(resolve, delay));

test('Toast works and closes after animation', async (t) => {
  const onClose = sinon.spy();

  const wrapper = shallow(
    <Toast onClose={onClose}>
      {'hi'}
    </Toast>
  );

  wrapper.find('.toast-dismiss').first().simulate('click');

  // Toast has received transition css classname, animates for 500ms then
  // calls the onClose prop.
  t.is(wrapper.hasClass('isClosing'), true);

  await wait();
  t.is(onClose.calledOnce, true);
});

test('Toast with timeout works', async (t) => {
  const onClose = sinon.spy();

  const wrapper = shallow(
    <Toast onClose={onClose} timeout={500}>
      {'hi'}
    </Toast>
  );

  await wait(2000);

  // Should only be called once and automatically
  t.is(onClose.calledOnce, true);
});

test('Toast works and cancels timeout when clicked', async (t) => {
  const onClose = sinon.spy();

  const wrapper = shallow(
    <Toast onClose={onClose} timeout={5000}>
      {'hi'}
    </Toast>
  );

  wrapper.find('.toast-dismiss').first().simulate('click');
  await wait(2500);

  // Should only be called once
  t.is(onClose.calledOnce, true);
});
