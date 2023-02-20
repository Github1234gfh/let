
import './App.less'
import './Style.css'
import './Override.scss'
import { _Layout } from './Components/Layout';
import { ConfigProvider } from 'antd';

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
				<_Layout />
			</ConfigProvider>
		</div>
	);
}

export default App;
