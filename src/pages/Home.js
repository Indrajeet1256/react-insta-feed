import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const APP_ID = "758057702404913";
const REDIRECT_URI = "https://hilarious-cuchufli-538de2.netlify.app/";
const SCOPE = "user_profile,user_media";
const RESPONSE_TYPE = "code";

const Home = () => {
	const [token, setToken] = useState("");
	useEffect(() => {
		const proxy = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, param) => searchParams.get(param),
		});
		if (proxy.code) {
			setToken(proxy.code);
		}
	}, []);

	console.log(token);
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
