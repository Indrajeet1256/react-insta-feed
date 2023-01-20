import React from "react";

import { Link } from "react-router-dom";

const APP_ID = "758057702404913";
const REDIRECT_URI = "https://hilarious-cuchufli-538de2.netlify.app/dashboard";
const SCOPE = "user_profile,user_media";
const RESPONSE_TYPE = "code";

const Home = () => {
	const handleAuthorize = () => {
		window.location = `https://api.instagram.com/oauth/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`;
	};
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
