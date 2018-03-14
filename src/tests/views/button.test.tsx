import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from '../../ts/views/button';

test('button onclick and text work if passed in', (t) => {
  const onClickSpy = sinon.spy();
  const wrapper = shallow(<Button text="" onClick={onClickSpy}/>);
});
