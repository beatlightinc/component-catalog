import * as React from 'react';
import * as classnames from 'classnames';

class Toast extends React.Component<{
  children: any,
  timeout?: number,
  onClose?: () => void
}, {
  isClosing?: boolean
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      isClosing: false
    };
  }

  public componentDidMount() {
    // Check to see if this is an auto-close Toast
    const { timeout } = this.props;

    if (timeout) {
      setTimeout(this.onClose.bind(this), timeout);
    }
  }

  public onClose() {
    const { onClose } = this.props;
    // set thet state to "isClosing" and then kick off a timer for a half second.
    // this allows us to set a classname on the component to animate it out.
    this.setState({ isClosing: true });
    setTimeout(onClose, 500);
  }

  public render() {
    const { children, onClose } = this.props;
    const { isClosing } = this.state;
    return (
      <div className={classnames('toast', { isClosing })}>
        <div className="toast-content">
          { children }
        </div>

        {
          onClose ?
          <div className="toast-dismiss icon-x" onClick={this.onClose.bind(this)} />
          : null
        }
      </div>
    );
  }
}

export default Toast;
