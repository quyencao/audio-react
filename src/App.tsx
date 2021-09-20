import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicExample } from './BasicExample';
import { Audios } from './Audios';
import { Popover, Button } from 'antd';

interface AudioPopupProps {
  audios: {
      fileName: string;
      link: string;
  }[]
}

const AudioPopup: FunctionComponent<AudioPopupProps> = ({ audios }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Popover
      destroyTooltipOnHide
      content={<Audios audios={audios} />}
      trigger="click"
      visible={visible}
      onVisibleChange={(visible: boolean) => setVisible(visible)}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  )
}

function App() {
  const [audios, setAudios] = useState([
    { fileName: '1', link: "https://nahtstorage.blob.core.windows.net/dev/1%2F1%2Faudios%2F70013b13-1b0a-4ba4-b0ef-e476f95dec26.mp3?sv=2020-08-04&st=2021-09-20T08%3A34%3A37Z&se=2021-09-20T08%3A59%3A37Z&sr=b&sp=r&sig=lbrcArLaKuvkGn70RCIzWOffY6Jvx5%2FJmZRgY4OYpDA%3D" },
    { fileName: '2', link: "https://nahtstorage.blob.core.windows.net/dev/1%2F1%2Faudios%2F70013b13-1b0a-4ba4-b0ef-e476f95dec26.mp3?sv=2020-08-04&st=2021-09-20T08%3A34%3A37Z&se=2021-09-20T08%3A59%3A37Z&sr=b&sp=r&sig=lbrcArLaKuvkGn70RCIzWOffY6Jvx5%2FJmZRgY4OYpDA%3D" },
    { fileName: '3', link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }
  ])
  return (
    <div className="App">
      <AudioPopup audios={audios}/>

      <AudioPopup audios={audios}/>

    </div>
  );
}

export default App;
