import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import BreadCrumbs from '../../../ts/views/widgets/breadcrumbs';

test('<BreadCrumbs /> will render right amount of buttons for <= 5 total pages ', (t) => {
  const path = [
    'First Level',
    'Second Level',
    'Third Level'
  ];

  const onClickSpy = sinon.spy();

  const elementWrapper = shallow(
    <BreadCrumbs path={path} onClick={onClickSpy}/>
  );

  const crumbs = elementWrapper.find('.breadcrumb');

  // The number of crumb elements should equal the path length we passed in.
  t.is(crumbs.length, path.length);

  // Click the first one and make sure the onClick handler does it's thing
  elementWrapper.find('.label').first().simulate('click');

  t.is(onClickSpy.calledWith(0), true);
});
