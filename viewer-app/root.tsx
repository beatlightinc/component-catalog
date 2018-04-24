import * as React from 'react';
import { Pagination, Input, FileButton, Button, AudioPlayer, Icon } from '../src/ts/index';

class Root extends React.Component<{}, {
  audioPlaying?: boolean
  audioPos?: number,
  inputValue?: string,
  roundInputValue?: string,
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      audioPlaying: true,
      audioPos: 0,
      inputValue: '',
      roundInputValue: ''
    };
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

  public render() {
    const wrapperStyle = {
      padding: '15px',
      backgroundColor: '#E5E5E5'
    };

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
        <br/>
        <Input placeholder="I'm disabled" disabled round={true}/>
        <br/>
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
        <br/>
        <br/>
        <br/>
        <Icon pathName={'MIN_UPLOAD_SINGLE'} color="#14151A" hoverColor="#0076FF" size="min"/>
      </div>
    );
  }
}

export default Root;
