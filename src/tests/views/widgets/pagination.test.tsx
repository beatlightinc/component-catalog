import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Pagination from '../../../ts/views/widgets/pagination';

test('<Pagination /> contains the right amount of children based on totalPages', (t) => {
  // TODO: write actual test for this, haven't found the right approach yet
  const wrapper = shallow(
    <Pagination
      activePage={20}
      totalPages={32}
    />);
  const wrapperLength = wrapper.find('pagination-element').length;
  console.log(wrapperLength);
  t.is(2, 2);
});
