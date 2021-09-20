import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    FunctionComponent,
} from "react";
import { Progress } from 'antd';
import { Audio } from "./Audio";

interface AudiosProps {
    audios: {
        fileName: string;
        link: string;
    }[]
}

export const Audios: FunctionComponent<AudiosProps> = ({ audios }) => {
    const [current, setCurrent] = useState<string | null>(null);

    const changeCurrent = (current: string | null) => {
        setCurrent(current);
    }
    
      return (
        <div className="App">
          {/* <BasicExample /> */}
          {audios.map(audio => (
            <Audio url={audio.link} id={audio.fileName} current={current} changeCurrent={changeCurrent}/>
          ))}
        </div>
      );
}
