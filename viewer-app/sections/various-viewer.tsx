import * as React from 'react';
import {
  AudioPlayer,
  ProgressDots,
  Pagination,
  Pill,
  UserPill,
  Slider,
  BreadCrumbs,
  Toast
} from '../../src/ts/index';

class VariousView extends React.Component<{}, {
  currentStep?: number,
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentStep: 3
    };
  }

  public onDotClick(i: number) {
    this.setState({
      currentStep: i
    });
  }

  public render() {

    const {
      currentStep
    } = this.state;

    return (
      <div className="viewer-app-section">
        <h2>{'Various'}</h2>

        <div>
          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Navigation'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Steps'}</h4>
                <ProgressDots totalSteps={5} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Pages'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Breadcrumbs'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Tabs'}</h4>
              </div>
            </div>

            <div className="+flex-column">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+display-flex">
                <div className="+flex-column +push-double-right">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <ProgressDots totalSteps={5} />
                </div>
                <div className="+flex-column">
                  <h4 className="+grey-text +push-bottom">{'Active'}</h4>
                  <ProgressDots totalSteps={5} currentStep={currentStep} stepOnClick={this.onDotClick.bind(this)}/>
                </div>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Pages'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Breadcrumbs'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Tabs'}</h4>
              </div>
            </div>
          </div>

          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Controls'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Slider'}</h4>
              </div>
            </div>
            <div className="+flex-column">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+display-flex">
                {/* Slider states go here! */}
              </div>
            </div>
          </div>

          <div className="+display-flex">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Pills'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Tags'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'User-Pill'}</h4>
              </div>
            </div>

            <div className="+flex-column">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                <div className="+display-flex"></div>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Removeable'}</h4>
                <div className="+display-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VariousView;