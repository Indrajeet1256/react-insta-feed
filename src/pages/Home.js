import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const APP_ID = "758057702404913";
const REDIRECT_URI = "https://hilarious-cuchufli-538de2.netlify.app/";
const SCOPE = "user_profile,user_media";
const RESPONSE_TYPE = "code";
//const CLIENT_SECRET = "44eaf13ea1323ad33e8a6c6974d7762c";

const Home = () => {
	const [code, setCode] = useState("");

	useEffect(() => {
		const proxy = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, param) => searchParams.get(param),
		});
		if (proxy.code) {
			setCode(proxy.code);
		}
	}, []);

	useEffect(() => {
		if (!code) return;
		async function getToken() {
			const options = {
				client_id: "758057702404913",
				client_secret: "44eaf13ea1323ad33e8a6c6974d7762c",
				response_type: "authorization_code",
				redirect_uri: "https://hilarious-cuchufli-538de2.netlify.app/",
				code: code,
			};

			const config = {
				method: "POST",
				url: "https://api.instagram.com/oauth/access_token",
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
				body: options,
			};
			try {
				const response = await axios(config);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		}
		getToken();
	}, [code]);

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
