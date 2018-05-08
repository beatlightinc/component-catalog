import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import Image from '../../../ts/views/widgets/image';

test('Image gets classnames properly and img recieves ', (t) => {
  const wrapper = shallow(<Image
    url={`http://via.placeholder.com/350x150`}
    className="test-image"
    height={150}
    width={350}/>);
  t.is(wrapper.hasClass('image-wrapper test-image'), true);
});
