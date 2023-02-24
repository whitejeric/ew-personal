import React, { useEffect } from 'react';
const Content = ({ current, Module }) => {
	useEffect(() => {
		console.log(current);
	});
	return (
		<div className="content">
			{current}
			<Module key={current} />
			<article></article>
			<article></article>
			<article></article>
			<article></article>
		</div>
	);
};

export default Content;
