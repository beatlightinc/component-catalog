import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import test from 'ava';
import { shallow } from 'enzyme';
import Pagination from '../../../ts/views/widgets/pagination';

test('<Pagination /> will render right amount of buttons for <= 5 total pages ', (t) => {
  // TODO: write actual test for this, haven't found the right approach yet
  const firstWrapper = shallow(
    <Pagination
      activePage={3}
      totalPages={5}
    />);
  const secondWrapper = shallow(
    <Pagination
      activePage={2}
      totalPages={3}
    />
  );
  const firstButtonAmount = firstWrapper.find('PageButton').length;
  const secondButtonAmount = secondWrapper.find('PageButton').length;
  t.is(firstButtonAmount, 5);
  t.is(secondButtonAmount, 3);
});

test('<Pagination /> will render the correct amount of buttons when active page is 0 and total pages > 5', (t) => {
  const wrapper = shallow(
    <Pagination
      activePage={0}
      totalPages={6}
    />
  );
  const buttonAmount = wrapper.find('PageButton').length;
  t.is(buttonAmount, 4);
});

test('<Pagination/> will render correct # of buttons when activePage !== 0 && <= 3, and total pages > 5', (t) => {
  const wrapper = shallow(
    <Pagination
      activePage={2}
      totalPages={20}
    />
  );
  const buttonAmount = wrapper.find('PageButton').length;
  console.log(buttonAmount);
});
