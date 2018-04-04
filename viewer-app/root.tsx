import * as React from 'react';
import { Pagination, Input, FileButton } from '../src/ts/index';

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Pagination activePage={8} totalPages={12} />
        <Input placeholder="cool" hasValidationState={true} validationState={false} value="too short" />
        <br/>
        <br/>
        <br/>
        <FileButton>{'Upload'}</FileButton>
      </div>
    );
  }
}

export default Root;
