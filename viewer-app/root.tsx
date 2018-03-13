import * as React from 'react';
import Components from '../src/ts/index';

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Components.Button />
      </div>
    );
  }
}

export default Root;
