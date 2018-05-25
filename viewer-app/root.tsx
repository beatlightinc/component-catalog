import * as React from 'react';
import ComponentSection from './component-section';
import ButtonsView from './sections/buttons-viewer';
import FormsView from './sections/forms-viewer';

import {
  ProgressTabs
} from '../src/ts/index';

class Root extends React.Component<{}, {
  tabStep?: number
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      tabStep: 0
    };
  }

  public onTabClick(i: number) {
    this.setState({ tabStep: i });
  }

  public renderHeaderTabs() {
    const { tabStep } = this.state;
    const tabNames = ['forms', 'buttons', 'various'];
    return (
      <ProgressTabs tabNames={tabNames} currentTab={tabStep} tabOnClick={this.onTabClick.bind(this)} />
    );
  }

  public renderButtonsView() {
    return (
      <div>
        <ButtonsView />
      </div>
    );
  }

  public renderFormsView() {
    return (
      <div>
        <FormsView />
      </div>
    );
  }

  public renderVariousView() {
    return (
      <div></div>
    );
  }

  public render() {
    const wrapperStyle = {
      padding: '15px',
      backgroundColor: '#F7F7F8'
    };

    const {
      tabStep,
    } = this.state;

    const testImageStyle = {
      border: '2px solid red'
    };

    let mainContent;
    switch (tabStep) {
      case 0:
        mainContent = this.renderFormsView();
        break;
      case 1:
        mainContent = this.renderButtonsView();
        break;
      case 2:
        mainContent = this.renderVariousView();
        break;
    }

    return (
      <div style={wrapperStyle}>
        {this.renderHeaderTabs()}
        {mainContent}
      </div>
    );
  }
}

export default Root;
