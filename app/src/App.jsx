
import Main from "./Components/page/Main";
import './App.less'
import './Style.css'

import { Button, ConfigProvider } from 'antd';

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0157A0',
          },
        }}
      >
        <Main />
      </ConfigProvider>
    </div>
  );
}

export default App;
