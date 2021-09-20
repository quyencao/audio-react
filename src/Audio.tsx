import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    FunctionComponent,
} from "react";
import ReactPlayer from "react-player";
import { Progress } from 'antd';

interface DurationProps {
    seconds: number;
    className?: string;
}

const Duration: FunctionComponent<DurationProps> = ({ seconds, className }) => {
    const format  = (seconds: number) => {
        const date = new Date(seconds * 1000)
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = pad(date.getUTCSeconds())
        if (hh) {
          return `${hh}:${pad(mm)}:${ss}`
        }
        return `${mm}:${ss}`
    }
      
    const pad = (string: number) => {
        return ('0' + string).slice(-2)
    }
    return (
      <time dateTime={`P${Math.round(seconds)}S`} className={className}>
        {format(seconds)}
      </time>
    )
}

interface AudioProps {
    url: string;
    id: string;
    current: string | null;
    changeCurrent: (current: string | null) => void;
}

export const Audio: FunctionComponent<AudioProps> = ({ url, id, current, changeCurrent }) => {
    const [playing, setPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [seeking, setSeeking] = useState(false);

    const handlePlayPause = () => {
        if (playing) {
            changeCurrent(null);
        } else {
            changeCurrent(id);
        }
        setPlaying(!playing);
    };

    const handleProgress = (a: any) => {
        setPlayed(a.played)
    }

    const handleDuration = (duration: number) => {
        setDuration(duration);
    }

    useEffect(() => {
        if (current) {
            if (current !== id) {
                setPlaying(false);
            }
        }
    }, [current, id]);

    return (
        <div style={{ display: 'flex', height: '30px', justifyContent: 'center', alignContent: 'center' }}>
            <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
            <Duration seconds={duration} />
            <Progress percent={played * 100} />
            <ReactPlayer
                url={url}
                playing={playing}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
        </div>
    )
}
