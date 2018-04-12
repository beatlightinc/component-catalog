"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames = require("classnames");
require("wavesurfer.js");
var react_wavesurfer_1 = require("react-wavesurfer");
var AudioPlayer = function (props) {
    var className = props.className, audioURL = props.audioURL, playing = props.playing, pos = props.pos, handlePosChange = props.handlePosChange;
    var wavesurferOptions = {
    // http://wavesurfer-js.org/docs/options.html
    // We can style the colours and stuff when we're ready
    };
    return (React.createElement("div", { className: classnames('audio-player-wrapper', className) },
        React.createElement(react_wavesurfer_1.default, { volume: 1, responsive: true, audioFile: audioURL, options: wavesurferOptions, pos: pos, onPosChange: function (e) { handlePosChange(e.originalArgs[0]); }, playing: playing })));
};
exports.default = AudioPlayer;
//# sourceMappingURL=audio-player.js.map