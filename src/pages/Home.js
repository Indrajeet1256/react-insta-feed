import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
	const handleAuthorize = () => {};
	return (
		<section>
			<Link to="/dashboard">Go To Dashboard</Link>
			<button type="button" onClick={handleAuthorize}>
				Authorize With Instagram
			</button>
		</section>
	);
};

export default Home;
