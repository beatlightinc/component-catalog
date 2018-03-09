import * as React from 'react';

class TestComponent extends React.Component<{
  name: string,
  children?: any
}, {}> {
  public render() {
    return (
      <div className="test-component-class">
        {this.props.name}
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default TestComponent;
