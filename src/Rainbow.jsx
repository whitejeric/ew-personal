import React from 'react';
import {
	default as AutomatedBlowUpGrid,
	default as SquaresGrid,
} from './AutomatedBlowUpGrid';
import BlowUpGrid from './BlowUpGrid';

export default function Rainbow() {
	return (
		<div id={'rainbow'}>
			<div className="spacer" />
			<AutomatedBlowUpGrid id={0} />
			<div className="rainbow-grid" id={'rainbow-grid'}>
				<div className="rainbow-card"></div>
				<div className="rainbow-card" id={'rainbow-card-2'}>
					{/* <AutomatedBlowUpGrid id={1} interval={200000} /> */}
				</div>
			</div>
		</div>
	);
}
