import * as React from 'react';
import * as ReactDOM from 'react-dom';
import test from 'ava';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import FileButton from '../../../ts/views/buttons/file-button';

test('<FileButton /> gets proper classnames if disabled', (t) => {
  const wrapper = shallow(
    <FileButton disabled={true}>
      {'test upload'}
    </FileButton>
  );
});

test('<FileButton /> functions do not get called if disabled', (t) => {

});
