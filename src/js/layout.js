import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import AddContact from "./views/AddContact";
import Contacts from "./views/Contacts";
import NotFound from "./views/NotFound"; // Assuming you have a NotFound component

import { Footer } from "./component/footer";

// Create your first component
const Layout = () => {
	// The basename is used when your project is published in a subdirectory and not in the root of the domain
	// You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/add-contact" element={<AddContact />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);