import * as React from 'react';
import Components from '../src/ts/index';

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Components.Pagination activePage={8} totalPages={12} />
        <Components.Input placeholder="cool" hasValidationState={true} validationState={false} value="too short" />
      </div>
    );
  }
}

export default Root;
