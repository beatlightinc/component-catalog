import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Input from '../../../ts/views/inputs/input';
import Button from '../../../ts/views/buttons/button';

test('<Input /> gets props passed in properly', (t) => {
  const wrapper = shallow(<Input />);
});
