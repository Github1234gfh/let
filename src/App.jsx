
import './App.less'
import './Style.css'
import './Override.scss'
import { _Layout } from './Components/Layout';
import { ConfigProvider } from 'antd';

import ruRu from 'antd/locale/ru_RU'

function App() {
	return (
		<div className="App">
			<ConfigProvider
				locale={ruRu}
				theme={{
					token: {
						colorPrimary: '#0157A0',
					},
				}}
			>
				<_Layout />
			</ConfigProvider>
		</div>
	);
}

export default App;
