import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Input from '../../../ts/views/inputs/input';
import Button from '../../../ts/views/buttons/button';

test('<Input /> gets props passed in properly', (t) => {
  const handleChange = sinon.spy();
  const wrapper = shallow(<Input
    inputType="text"
    autoFocus={false}
    inputValue=""
    onHandleChange={handleChange}
    disabled={false}/>);
  wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
  t.is(handleChange.called, true);
});
