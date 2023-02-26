import React from 'react';
import BlowUpGrid from './BlowUpGrid';

export default function Rainbow() {
	return (
		<div id={'rainbow'}>
			<div className="spacer" />
			<div className="rainbow-grid" id={'rainbow-grid'}>
				<div className="rainbow-card">
					<BlowUpGrid id={'rainbow'} parentID={'rainbow-grid'} auto={true} />
				</div>
				<div className="rainbow-card">Rainbow</div>
				<div className="rainbow-card">Rainbow</div>
				<div className="rainbow-card">Rainbow</div>
				<div className="rainbow-card">Rainbow</div>
				<div className="rainbow-card">Rainbow</div>
				<div className="rainbow-card">Rainbow</div>
			</div>
		</div>
	);
}
