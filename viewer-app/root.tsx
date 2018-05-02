import * as React from 'react';
import { Pagination,
  Input,
  FileButton,
  Button,
  AudioPlayer,
  Textarea,
  ProgressDots,
  ProgressTabs,
  ToggleSwitch,
  RadioButton,
  Icon
  } from '../src/ts/index';

class Root extends React.Component<{}, {
  audioPlaying?: boolean
  audioPos?: number,
  inputValue?: string,
  roundInputValue?: string,
  textareaValue?: string,
  currentStep?: number,
  tabStep?: number,
  toggleValue?: boolean,
  activeRadioButtonID?: string
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      audioPlaying: true,
      audioPos: 0,
      inputValue: '',
      roundInputValue: '',
      textareaValue: '',
      currentStep: 0,
      tabStep: 0,
      toggleValue: false,
      activeRadioButtonID: 'One'
    };
  }

  public toggleSwitch() {
    const { toggleValue } = this.state;
    this.setState({ toggleValue: !toggleValue });
  }

  public onAudioPositionChange(audioPos: number) {
    this.setState({ audioPos });
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

  public onStepClick(i: number) {
    this.setState({ currentStep: i });
  }

  public onTabClick(i: number) {
    this.setState({ tabStep: i });
  }

  public radioOnClick(key: string) {
    key === this.state.activeRadioButtonID
    ? this.setState({ activeRadioButtonID: null })
    : this.setState({ activeRadioButtonID: key });
  }

  public render() {
    const wrapperStyle = {
      padding: '15px',
      backgroundColor: '#F7F7F8'
    };

    const { textareaValue, tabStep, currentStep, toggleValue, activeRadioButtonID } = this.state;

    const tabNames = ['tab 1', 'this is getting out of hand', 'tab 3', 'tab 4'];

    return (
      <div style={wrapperStyle}>
        <Pagination activePage={8} totalPages={12} />
        <Input placeholder="I'm default"
          patternString="\b[A-z]{1,2}\b"
          value={this.state.inputValue}
          onHandleChange={this.onInputChange.bind(this)} />
        <br/>
        <br/>
        <Input onHandleChange={this.onRoundInputChange.bind(this)}
          patternString="\b[A-z]{1,3}\b"
          placeholder="I'm round"
          value={this.state.roundInputValue}
          round={true}/>
        <br/>
        <br/>
        <Textarea value={textareaValue} placeholder="Disabled" onHandleChange={this.onTextareaChange.bind(this)} />
        <br/>
        <Input placeholder="I'm disabled" disabled round={true}/>
        <br/>
        <br/>
        <RadioButton key={1} onClick={this.radioOnClick.bind(this, 'One')} activeLabel={activeRadioButtonID} label='One'/>
        <br/>
        <br/>
        <RadioButton key={2} onClick={this.radioOnClick.bind(this, 'Two')} activeLabel={activeRadioButtonID} label='Two' disabled />
        <br/>
        <br/>
        <RadioButton key={3} onClick={this.radioOnClick.bind(this, 'Three')} activeLabel={activeRadioButtonID} label='Three' />
        <br/>
        <br/>
        <ProgressDots totalSteps={5} currentStep={currentStep} stepOnClick={this.onStepClick.bind(this)} />
        <br/>
        <br/>
        <ProgressTabs tabNames={tabNames} currentTab={tabStep} tabOnClick={this.onTabClick.bind(this)} />
        <br/>
        <br/>
        <Button color="grey" disabled={false}>{'Upload'}</Button>
        <br/>
        <Button color="white" disabled={false}>{'Upload'}</Button>
        <br/>
        <Button disabled={false}>{'Upload'}</Button>
        <br/>
        <Button color="red" disabled={false}>{'Upload'}</Button>
        <br/>
        <Button color="minimal" disabled={false}>{'Upload'}</Button>
        <br/>arn
        <Button color="grey" disabled={true}>{'Upload'}</Button>
        <br/>
        <Button color="white" disabled={true}>{'Upload'}</Button>
        <br/>
        <Button disabled={true}>{'Upload'}</Button>
        <br/>
        <Button color="red" disabled={true}>{'Upload'}</Button>
        <br/>
        <Button color="minimal" disabled={true}>{'Upload'}</Button>
        <br/>
        <br/>
        <br/>
        <FileButton onChange={() => { /**/ }}>{'Upload'}</FileButton>

        <AudioPlayer
          audioURL={'http://files.platform.test/audio/1/1c31d054ed9c7420.mp3'}
          playing={this.state.audioPlaying}
          pos={this.state.audioPos}
          handlePosChange={this.onAudioPositionChange.bind(this)}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Icon pathName={'MIN_UPLOAD_SINGLE'} color="#14151A" hoverColor="#0076FF" size="min"/>
      </div>
    );
  }
}

export default Root;
