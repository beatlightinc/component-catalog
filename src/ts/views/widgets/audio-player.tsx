import * as React from 'react';
import * as classnames from 'classnames';
import 'wavesurfer.js';
import Wavesurfer from 'react-wavesurfer';

const AudioPlayer = (props: {
  className?: string,
  playing: boolean,
  audioURL: string,
  pos: number,
  handlePosChange: (newPositon: number) => void
}) => {

  const {
    className,
    audioURL,
    playing,
    pos,
    handlePosChange
  } = props;

  const wavesurferOptions = {
    // http://wavesurfer-js.org/docs/options.html
    // We can style the colours and stuff when we're ready
  };

  return (
    <div className={classnames('audio-player-wrapper', className)}>
      <Wavesurfer
        volume={1}
        responsive={true}
        audioFile={audioURL}
        options={wavesurferOptions}
        pos={pos}
        onPosChange={(e: any) => { handlePosChange(e.originalArgs[0]); }}
        playing={playing}
      />
    </div>
  );
};

export default AudioPlayer;
