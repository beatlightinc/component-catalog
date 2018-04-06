import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import FileButton from '../../../ts/views/buttons/file-button';

// I'm just doing this to make sure they're calling when NOT disabled too
test('<FileButton/> functions work properly', (t) => {
  const onClickSpy = sinon.spy();
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(
    <FileButton
      onClick={onClickSpy}
      onChange={onChangeSpy}>
      {'test upload'}
    </FileButton>
  );
  wrapper.find('input').simulate('change', {target: {file: 'some/file/path'}});
  wrapper.find('input').simulate('click');
  t.is(onChangeSpy.called, true);
  t.is(onClickSpy.called, true);
});

test('<FileButton /> gets proper classnames if disabled', (t) => {
  const wrapper = shallow(
    <FileButton disabled={true}>
      {'test upload'}
    </FileButton>
  );
  t.is(wrapper.hasClass('file-button disabled'), true);
  t.is(wrapper.containsMatchingElement(<input className="file-button-input disabled" />), true);
});

test('<FileButton /> functions do not get called if disabled', (t) => {
  const onChangeSpy = sinon.spy();
  const onClickSpy = sinon.spy();
  const wrapper = shallow(
    <FileButton
      onChange={onChangeSpy}
      onClick={onClickSpy}
      disabled={true}/>
  );
  wrapper.find('input').simulate('change', {target: {file: 'some/file/path'}});
  wrapper.find('input').simulate('click');
  t.is(onChangeSpy.called, false);
  t.is(onClickSpy.called, false);
});
