import { useReducer } from 'react';
import AA from './AA';
import reactLogo from './assets/react.svg';
import BB from './BB';
import Content from './Content';
import EW from './EW';
import Nav from './Nav';

const subApps = [
	{ name: 'App A', module: AA },
	{ name: 'App B', module: BB },
];

//keep track of which module is loaded across App
function globalReducer(state, action) {
	if (action.type === 'changePage') {
		console.log(state, action);
		return {
			page: action.payload,
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
	});

	return (
		<div className="App">
			<Nav navigate={dispatch} items={subApps} />
			<Content current={state.page} Module={state.module} />
		</div>
	);
}

export default App;
