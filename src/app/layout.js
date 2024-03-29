"use client";

import "../styles/globals.css";
import "../styles/home.css";

import React from "react";
import Footer from "@/Components/Footer";
// import createEmotionCache from "@/utility/createEmotionCache";
import { SnackbarProvider } from "notistack";
import Header from "@/Components/Header/Header";
import ScrollToTopBtn from "@/Components/Helpers/ScrollToTopBtn";
import { StoreProvider } from "@/context/Store";

const RootLayout = ({ children }) => {
	// const cache = createEmotionCache();

	return (
		<html lang="en" className="no-touch">
			<head>
				<link rel="icon" href="/icon.png" />
			</head>
			{/* <CacheProvider value={cache}> */}
			<body>
				<StoreProvider>
					<SnackbarProvider
						maxSnack={3}
						autoHideDuration={4000}
						// preventDuplicate
						variant="primary"
					>
						<Header />
						<ScrollToTopBtn />
						{children}
						<Footer />
					</SnackbarProvider>
				</StoreProvider>
			</body>
			{/* </CacheProvider> */}
		</html>
	);
};
export default React.memo(RootLayout);
