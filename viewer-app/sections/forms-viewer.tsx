import * as React from 'react';

class FormsView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="viewer-app-page">
        <div className="viewer-app-page-title">{'Forms'}</div>
        <div className="viewer-app-content-wrapper">
          <div className="viewer-app-section-container">
            <h3>{'Text inputs'}</h3>
            <div className="viewer-app-section-content">
              <h4>{'Round'}</h4>
              <div className="component-box"></div>
            </div>
            <div className="viewer-app-section-content">
              <h4>{'Default'}</h4>
              <div className="component-box"></div>
            </div>
            <div className="viewer-app-section-content">
              <h4>{'Default with label'}</h4>
              <div className="component-box"></div>
            </div>
          </div>

          <div className="viewer-app-section-container">
            <h3>{'Text Area'}</h3>
            <div className="viewer-app-section-content">
              <h4>{'Default'}</h4>
              <div className="component-box"></div>
            </div>
          </div>

          <div className="viewer-app-section-container">
            <h3>{'States'}</h3>
            <div className="viewer-app-section-content"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsView;
