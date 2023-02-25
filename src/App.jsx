import { useReducer } from 'react';
import About from './About';
import reactLogo from './assets/react.svg';
import BB from './BB';
import Content from './Content';
import EW from './EW';
import Nav from './Nav';
import WebTemplate from './WebTemplate';

const subApps = [
	{ name: 'web template', module: WebTemplate },
	{ name: 'about', module: About },
	{ name: 'app B', module: BB },
];

//keep track of which module is loaded across App
function globalReducer(state, action) {
	if (action.type === 'changePage') {
		const old_module = state.module;
		console.log(state, action);
		return {
			page: action.payload,
			pastModule: old_module,
			module: action.module,
		};
	}
	return {
		page: 'home',
		module: EW,
	};
}

function App() {
	const [state, dispatch] = useReducer(globalReducer, {
		age: 42,
		page: 'home',
		module: EW,
		pastModule: EW,
	});

	return (
		<div className="App">
			<Nav navigate={dispatch} items={subApps} />
			<Content
				current={state.page}
				PastModule={state.pastModule}
				Module={state.module}
			/>
		</div>
	);
}

export default App;
