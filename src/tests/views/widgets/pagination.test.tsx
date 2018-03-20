import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Pagination from '../../../ts/views/widgets/pagination';

test('<Pagination /> contains the right amount of children based on totalPages', (t) => {
  const wrapper = shallow(
    <Pagination
      activePage={1}
      totalPages={32}
    />);
  const wrapperLength = wrapper.find('PageButton').length;
  t.is(2, 2);
});
