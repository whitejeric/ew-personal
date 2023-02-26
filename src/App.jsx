import { useReducer } from 'react';
import About from './About';
import reactLogo from './assets/react.svg';
import BB from './BB';
import BlowUpGrid from './BlowUpGrid';
import Content from './Content';
import EW from './EW';
import Nav from './Nav';
import Rainbow from './Rainbow';
import WebTemplate from './WebTemplate';

const subApps = [
	{ name: 'web template', module: WebTemplate, props: { id: 'wtmp' } },
	{ name: 'about', module: About },
	{ name: 'blow up', module: BlowUpGrid },
	{ name: 'rainbow', module: Rainbow, props: { id: 'rain' } },
];

//keep track of which module is loaded across App
function globalReducer(state, action) {
	if (action.type === 'changePage') {
		const old_module = state.module;
		console.log(state, action);
		return {
			page: action.payload,
			module: action.module,
			props: action.props,
		};
	}
	return {
		page: 'home',
		module: EW,
	};
}

function App() {
	const [state, dispatch] = useReducer(globalReducer, {
		page: 'home',
		module: EW,
		props: { id: 'ew' },
	});

	return (
		<div className="App">
			<Nav navigate={dispatch} items={subApps} />
			<Content current={state.page} Module={state.module} props={state.props} />
		</div>
	);
}

export default App;
