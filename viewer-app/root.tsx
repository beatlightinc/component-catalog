import * as React from 'react';
import { Pagination, Input, FileButton, Button, AudioPlayer } from '../src/ts/index';

class Root extends React.Component<{}, {
  audioPlaying?: boolean
  audioPos?: number
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      audioPlaying: true,
      audioPos: 0
    };
  }

  public onAudioPositionChange(audioPos: number) {
    this.setState({ audioPos });
  }

  public render() {
    return (
      <div>
        <Pagination activePage={8} totalPages={12} />
        <Input placeholder="cool" hasValidationState={true} validationState={false} value="too short" />
        <br/>
        <br/>
        <br/>
        <Button color="grey" disabled={false}>{'Upload'}</Button>
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
      </div>
    );
  }
}

export default Root;
