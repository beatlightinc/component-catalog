import * as React from 'react';

class TestComponent extends React.Component<{
  name: string
}, {}> {
  public render() {
    return (
      <div className="test-component-class">{this.props.name}</div>
    );
  }
}

export default TestComponent;
