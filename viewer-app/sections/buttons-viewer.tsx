import * as React from 'react';
import { Button } from '../../src/ts/index';

class ButtonsView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="viewer-app-section">
        <div className="page-title">{'Buttons'}</div>

        <div className="+display-flex">
          <div className="+flex-column">
            <h3>{'Standard'}</h3>

            <h4>{'Default'}</h4>
            <div className="+display-flex">
              <Button disabled={true}>{'Click'}</Button>
              <Button color="grey" disabled={true}>{'Click'}</Button>
              <Button color="white" disabled={true}>{'Click'}</Button>
            </div>

            <h4>{'Medium'}</h4>
            <div className="+display-flex">
              <Button size="medium" disabled={true}>{'Click'}</Button>
              <Button size="medium" color="grey" disabled={true}>{'Click'}</Button>
              <Button size="medium" color="white" disabled={true}>{'Click'}</Button>
            </div>

            <h4>{'Default with Icon'}</h4>
            <div className="+display-flex">
              <Button disabled={false}>
                {'Click'}
                <span className="icon-arrow-down" />
              </Button>
              <Button color="grey" disabled={false}>
                {'Click'}
                <span className="icon-arrow-down" />
              </Button>
              <Button color="white" disabled={false}>
                {'Click'}
                <span className="icon-arrow-down" />
              </Button>
            </div>

            <h4>{'Icon'}</h4>
            <div className="+display-flex">
              <Button disabled={false}>
                <span className="icon-paperclip" />
              </Button>
              <Button color="grey" disabled={false}>
                <span className="icon-paperclip" />
              </Button>
              <Button color="white" disabled={false}>
                <span className="icon-paperclip" />
              </Button>
            </div>
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

        <div className="+display-flex">
          <div className="+flex-column">
            <h3>{'Button Groups'}</h3>
            <h4>{'Default with Icons'}</h4>
            <div></div>
            <h4>{'Icon'}</h4>
          </div>
          <div className="+flex-column">
            <h3>{'Minimal'}</h3>
            <h4>{'Default'}</h4>
            <div></div>
            <h4>{'Default with Icon'}</h4>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsView;
