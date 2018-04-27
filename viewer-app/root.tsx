import * as React from 'react';
import { Pagination,
  Input,
  FileButton,
  Button,
  AudioPlayer,
  Textarea,
  ProgressDots,
  ProgressTabs,
  ToggleSwitch} from '../src/ts/index';

class Root extends React.Component<{}, {
  audioPlaying?: boolean
  audioPos?: number,
  inputValue?: string,
  roundInputValue?: string,
  textareaValue?: string,
  currentStep?: number,
  tabStep?: number,
  toggleValue?: boolean
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
      toggleValue: false
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

  public render() {
    const wrapperStyle = {
      padding: '15px',
      backgroundColor: '#F7F7F8'
    };

    const { textareaValue, tabStep, currentStep, toggleValue } = this.state;

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
        <br/>
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
        <ToggleSwitch onClick={this.toggleSwitch.bind(this)} active={toggleValue} disabled={false} />
      </div>
    );
  }
}

export default Root;
