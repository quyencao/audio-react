import React, { FunctionComponent } from "react"
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"
import { FileLoader } from "./FileLoader"
import { AudioSeekBar } from "../AudioSeekBar"
import { AudioControls } from "./AudioControls"
import { TimeLabel } from "../TimeLabel"
import "./styles.css"

const AudioPlayer : React.FunctionComponent<{ file: string }> = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        // src: file,
        src: [file],
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })

    if (!ready && !loading) return <div>No audio to play</div>
    if (loading) return <div>Loading audio</div>

    return (
        <div>
            <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
        </div>
    )
}

const Player = () => {
    const value = useAudioPlayer()
    const { ready } = value
    if (ready) {
        return (
            <div className="player">
                <AudioControls />
                <AudioSeekBar className="player__seek" />
                <TimeLabel />
            </div>
        )
    }

    return null
}

export const BasicExample: FunctionComponent = () => {
    return (
        <div className="basicExample">
            <AudioPlayerProvider>
                <FileLoader />
                <br />
                <Player />
            </AudioPlayerProvider>
            <h1>New audio</h1>
            <br />
            <AudioPlayerProvider>
                <AudioPlayer file={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}/>
                <Player />
            </AudioPlayerProvider>
        </div>
    )
}
