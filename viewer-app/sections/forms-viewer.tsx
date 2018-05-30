import * as React from 'react';
import { Input, Textarea, ToggleSwitch, RadioButton, Checkbox, NumberInput, Dropdown } from '../../src/ts/index';

class FormsView extends React.Component<{}, {
  numberInputValue?: number,
  inputValue?: string,
  roundInputValue?: string,
  textareaValue?: string,
  toggleValue?: boolean,
  activeRadioButtonID?: string,
  checkboxValue?: boolean
}> {
  constructor(props: any) {
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

  public onInputChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.currentTarget.value });
  }

  public onRoundInputChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ roundInputValue: e.currentTarget.value });
  }

  public onTextareaChange(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ textareaValue: e.currentTarget.value });
  }

  public toggleCheckbox() {
    const { checkboxValue } = this.state;
    this.setState({ checkboxValue: !checkboxValue });
  }

  public toggleSwitch() {
    const { toggleValue } = this.state;
    this.setState({ toggleValue: !toggleValue });
  }

  public radioOnClick(key: string) {
    key === this.state.activeRadioButtonID
    ? this.setState({ activeRadioButtonID: null })
    : this.setState({ activeRadioButtonID: key });
  }

  public numberInputHandleChange(newValue: number) {
    this.setState({ numberInputValue: newValue });
  }

  public onDropdownSelect(e: any) {
    // debugger;
  }

  public render() {
    const {
      textareaValue,
      activeRadioButtonID,
      numberInputValue
    } = this.state;

    return (
      <div className="viewer-app-page">
        <h2 className="+push-double-bottom">{'Forms'}</h2>
        <div className="viewer-app-content-wrapper">

          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-bottom">{'Text inputs'}</h3>

              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Dropdown'}</h4>
                <Dropdown
                  options={['Bounce', 'Stem']}
                  onOptionSelected={this.onDropdownSelect.bind(this)}
                />
              </div>

              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Round'}</h4>
                <Input onHandleChange={this.onRoundInputChange.bind(this)}
                  patternString="\b[A-z]{1,3}\b"
                  placeholder="I'm round"
                  value={this.state.roundInputValue}
                  round={true}/>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                <Input placeholder="I'm default"
                  patternString="\b[A-z]{1,2}\b"
                  value={this.state.inputValue}
                  onHandleChange={this.onInputChange.bind(this)} />
              </div>
            </div>

            <div className="+flex-column">
              <h3 className="+push-bottom">{'States'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                <Input onHandleChange={() => {}} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Filled'}</h4>
                <Input onHandleChange={() => {}} value={'I am filled!'} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Active'}</h4>
                <Input onHandleChange={() => {}} autoFocus={true} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                <Input onHandleChange={() => {}} disabled={true} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Success'}</h4>
                <Input onHandleChange={() => {}} validationState={true} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Error'}</h4>
                <Input onHandleChange={() => {}} validationState={false} />
              </div>
            </div>
          </div>

          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-bottom +push-double-right">
              <h3 className="+push-bottom">{'Text Area'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                <Textarea value={textareaValue}
                  placeholder="Text area"
                  onHandleChange={this.onTextareaChange.bind(this)} />
              </div>
            </div>

            <div className="+flex-column +push-bottom">
              <h3 className="+push-bottom">{'Checkboxes'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Normal'}</h4>
                <Checkbox
                  label="test checkbox"
                  onClick={() => {}}
                  checked={false}
                />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Checked'}</h4>
                <Checkbox
                  label="test checkbox active"
                  onClick={this.toggleCheckbox.bind(this)}
                  checked={true}
                />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Indeterminate'}</h4>
                <Checkbox
                  label="indeterminate test checkbox"
                  onClick={() => {}}
                  checked={false}
                  indeterminate={true}
                />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                <Checkbox
                  label="disabled test checkbox"
                  onClick={() => {}}
                  checked={false}
                  disabled={true}
                />
              </div>
            </div>
          </div>

          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-bottom +push-double-right">
              <h3 className="+push-bottom">{'Radio Buttons'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Normal'}</h4>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Checked'}</h4>
                <RadioButton key={1} onClick={this.radioOnClick.bind(this, 'One')}
                  activeLabel={activeRadioButtonID}
                  label="One"/>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                <RadioButton key={2} onClick={() => {}}
                  disabled={true}
                  label="One"/>
              </div>
            </div>

            <div className="+flex-column +push-bottom">
              <h3 className="+push-bottom">{'Toggle Switches'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Off'}</h4>
                <ToggleSwitch onClick={() => {}} active={false}/>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'On'}</h4>
                <ToggleSwitch onClick={() => {}} active={true}/>
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                <ToggleSwitch onClick={() => {}} disabled={true}/>
              </div>
            </div>
          </div>

          <div className="+flex-column +push-double-bottom">
            <h3 className="+push-bottom">{'Text Input Groups'}</h3>
            <div className="+flex-column">
              <h4 className="+grey-text +push-bottom">{'Round with Right Icon'}</h4>
              <Input
                onHandleChange={this.onRoundInputChange.bind(this)}
                patternString="\b[A-z]{1,3}\b"
                placeholder="I've got an icon"
                value={this.state.roundInputValue}
                iconType="icon-search"
                round={true}
              />
            </div>
            <div className="+flex-column">
              <h4 className="+grey-text +push-bottom">{'Default with Right Icon'}</h4>
              <Input
                onHandleChange={this.onRoundInputChange.bind(this)}
                patternString="\b[A-z]{1,3}\b"
                placeholder="I've got an icon"
                value={this.state.roundInputValue}
                iconType="icon-search"
              />
            </div>
          </div>

          <div className="+flex-column">
            <h3 className="+push-bottom">{'Numeric Inputs'}</h3>
            <div className="+display-flex +push-bottom">
              <div className="+flex-column +push-right">
                <div className="+flex-column">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <NumberInput
                    placeholder="0"
                    value={numberInputValue}
                    handleChange={this.numberInputHandleChange.bind(this)}
                    max={15}
                    min={0}
                  />
                </div>
              </div>
              <div className="+flex-column +push-right">
                <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                <NumberInput
                  placeholder="0"
                  value={numberInputValue}
                  handleChange={this.numberInputHandleChange.bind(this)}
                  max={15}
                  min={0}
                  disabled={true}
                />
              </div>
              <div className="+flex-column +push-right">
                <h4 className="+grey-text +push-bottom">{'With Value'}</h4>
                <NumberInput
                  placeholder="0"
                  value={10}
                  handleChange={this.numberInputHandleChange.bind(this)}
                  max={15}
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsView;
