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
      currentStep: 0
    };
  }

  public render() {

    const {
      currentStep
    } = this.state;

    return (
      <div className="viewer-app-section">
        <h2>{'Various'}</h2>

      </div>
    );
  }
}

export default VariousView;
