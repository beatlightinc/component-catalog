import * as React from 'react';
import { Pagination, Input } from '../src/ts/index';

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Pagination activePage={8} totalPages={12} />
        <Input placeholder="cool" hasValidationState={true} validationState={false} value="too short" />
      </div>
    );
  }
}

export default Root;
