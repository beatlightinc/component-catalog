import * as React from 'react';

class ButtonsView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="viewer-app-section">
        <div className="page-title">{'Buttons'}</div>

        <div className="+display-flex">
          <div className="+flex-column">
            <h3>{'Standard'}</h3>
            <h4>{'Default'}</h4>
            <div className="+display-flex"></div>
            <h4>{'Medium'}</h4>
            <div className="+display-flex"></div>
            <h4>{'Default with Icon'}</h4>
            <div className="+display-flex"></div>
            <h4>{'Icon'}</h4>
            <div className="+display-flex"></div>
          </div>

          <div className="+flex-column">
            <h3>{'States'}</h3>
            <h4>{'Default'}</h4>
            <div className="+display-flex"></div>
            <h4>{'Active'}</h4>
            <div className="+display-flex"></div>
            <h4>{'Disabled'}</h4>
            <div className="+display-flex"></div>
          </div>
        </div>

        <div className="+flex-column">
          <h3>{'Round'}</h3>
          <h4>{'Default'}</h4>
          <div className="+display-flex"></div>
          <h4>{'Small'}</h4>
          <div className="+display-flex"></div>
          <h4>{'Large'}</h4>
          <div className="+display-flex"></div>
        </div>
      </div>
    );
  }
}

export default ButtonsView;
