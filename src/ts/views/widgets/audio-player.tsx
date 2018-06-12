import * as React from 'react';
import * as classnames from 'classnames';
import 'wavesurfer.js';
import Wavesurfer from 'react-wavesurfer';

const AudioPlayer = (props: {
  className?: string,
  style?: any,
  playing: boolean,
  audioURL: string,
  pos: number,
  handlePosChange: (newPositon: number) => void
}) => {

  const {
    className,
    style,
    audioURL,
    playing,
    pos,
    handlePosChange
  } = props;

  const wavesurferOptions = {
    barWidth: 1
    // http://wavesurfer-js.org/docs/options.html
    // We can style the colours and stuff when we're ready
  };

  return (
    <div className={classnames('audio-player-wrapper', className)}
      style={style}
    >
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
