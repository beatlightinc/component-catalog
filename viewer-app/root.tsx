import * as React from 'react';
import { Pagination, Input, FileButton, Button } from '../src/ts/index';

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Pagination activePage={8} totalPages={12} />
        <Input placeholder="cool" hasValidationState={true} validationState={false} value="too short" />
        <br/>
        <br/>
        <br/>
        <Button>{'Regular Button'}</Button>
        <br/>
        <br/>
        <br/>
        <FileButton onChange={() => {}}>{'Upload'}</FileButton>
      </div>
    );
  }
}

export default Root;
