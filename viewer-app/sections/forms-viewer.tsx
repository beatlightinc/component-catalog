import * as React from 'react';

class FormsView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="viewer-app-page">
        <div className="viewer-app-page-title">{'Forms'}</div>
        <div className="viewer-app-content-wrapper">
          <div className="viewer-app-section-container">
            <h3>{'Text inputs'}</h3>
            <div className="+flex-column">
              <h4>{'Round'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Default'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Default with label'}</h4>
            </div>
          </div>

          <div className="viewer-app-section-container">
            <h3>{'Text Area'}</h3>
            <div className="+flex-column">
              <h4>{'Default'}</h4>
            </div>
          </div>

          <div className="viewer-app-section-container">
            <h3>{'States'}</h3>
            <div className="+flex-column">
              <h4>{'Default'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Hover'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Filled'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Active'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Disabled'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Success'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Error'}</h4>
            </div>
          </div>

          <div className="viewer-app-section-container">
            <h3>{'Checkboxes'}</h3>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsView;
