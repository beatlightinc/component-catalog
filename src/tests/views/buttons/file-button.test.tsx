import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import FileButton from '../../../ts/views/buttons/file-button';

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
  wrapper.simulate('click');
  t.is(onClickSpy.called, true);
  t.is(onChangeSpy.called, true);
});

test('<FileButton /> gets proper classnames if disabled', (t) => {
  const wrapper = shallow(
    <FileButton disabled={true}>
      {'test upload'}
    </FileButton>
  );
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

});
