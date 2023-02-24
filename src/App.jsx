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
function reducer(state, action) {
	if (action.type === 'changePage') {
		console.log(state, action);
		return {
			age: state.age + 1,
			page: action.payload,
			module: action.module,
		};
	}
	return {
		age: 0,
		page: 'home',
		module: EW,
	};
}

function App() {
	const [state, dispatch] = useReducer(reducer, {
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
