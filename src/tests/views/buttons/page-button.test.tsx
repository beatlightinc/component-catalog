import * as React from 'react';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import PageButton from '../../../ts/views/buttons/page-button';

test('<PageButton /> onclick and page number work if passed in', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(<PageButton pageNumber={2} onClick={onClickSpy} />);
  wrapper.simulate('click');
  t.is(onClickSpy.called, true);
  t.is(wrapper.text(), '2');
});

test('<PageButton /> onclick will not fire if disabled, classname gets passed in', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(
    <PageButton pageNumber={2}
      disabled={true}
      onClick={onClickSpy}/>
  );
  wrapper.simulate('click');
  t.is(onClickSpy.called, false);
  t.is(wrapper.hasClass('page-button'), true);
});
