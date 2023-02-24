import React from 'react';
const Nav = ({ navigate, items }) => {
	return (
		<div className="nav">
			<div id={'nav-logo'} className="nav-section">
				<a
					href="#"
					onClick={() => {
						navigate({ type: '#', payload: 'logo' });
					}}
				>
					EW
				</a>
			</div>
			<div id={'nav-links'} className="nav-section">
				{items.map((e, i) => {
					return (
						<div id={'nav-' + e.name + i} className="item-section">
							<a
								href="#"
								onClick={() => {
									navigate({
										type: 'changePage',
										payload: e.name,
										module: e.module,
									});
								}}
							>
								{e.name}
							</a>
						</div>
					);
				})}
			</div>
			<div id={'nav-socials'} className="nav-section">
				<a href="#">linkedin</a>
				<a href="#">github</a>
			</div>
			<div id={'nav-contact'} className="nav-section">
				<a href="#">contact me</a>
			</div>
		</div>
	);
};

export default Nav;
