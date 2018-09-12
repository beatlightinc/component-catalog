import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Spinner from '../../../ts/views/widgets/spinner';

test('Spinner gets proper classnames from props', (t) => {
  const testSpin = shallow(<Spinner className="large blue" />);
  t.is(testSpin.hasClass('spinner large blue'), true);
});
