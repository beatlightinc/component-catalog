import * as React from 'react';
import { Input, Textarea, ToggleSwitch, RadioButton, Checkbox, NumberInput } from '../../src/ts/index';

class FormsView extends React.Component<{}, {
  numberInputValue?: number,
  inputValue?: string,
  roundInputValue?: string,
  textareaValue?: string,
  toggleValue?: boolean,
  activeRadioButtonID?: string,
  checkboxValue?: boolean
}> {
  constructor(props) {
    super(props);
    this.state = {
      numberInputValue: 0,
      inputValue: '',
      roundInputValue: '',
      textareaValue: '',
      toggleValue: false,
      activeRadioButtonID: 'One',
    };
  }

  public render() {
    return (
      <div className="viewer-app-page">
        <div className="viewer-app-page-title">{'Forms'}</div>
        <div className="viewer-app-content-wrapper">
          <div className="+flex-column">
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

          <div className="+flex-column">
            <h3>{'Text Area'}</h3>
            <div className="+flex-column">
              <h4>{'Default'}</h4>
            </div>
          </div>

          <div className="+flex-column">
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

          <div className="+flex-column">
            <h3>{'Checkboxes'}</h3>
            <div className="+flex-column">
              <h4>{'Normal'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Checked'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Indeterminate'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Disabled'}</h4>
            </div>
          </div>

          <div className="+flex-column">
            <h3>{'Radio Buttons'}</h3>
            <div className="+flex-column">
              <h4>{'Normal'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Checked'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Disabled'}</h4>
            </div>
          </div>

          <div className="+flex-column">
            <h3>{'Toggle Switches'}</h3>
            <div className="+flex-column">
              <h4>{'Off'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'On'}</h4>
            </div>
            <div className="+flex-column">
              <h4>{'Disabled'}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsView;
