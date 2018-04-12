/// <reference types="react" />
import 'wavesurfer.js';
declare const AudioPlayer: (props: {
    className?: string;
    playing: boolean;
    audioURL: string;
    pos: number;
    handlePosChange: (newPositon: number) => void;
}) => JSX.Element;
export default AudioPlayer;
