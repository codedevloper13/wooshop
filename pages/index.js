/** @format */

import Head from "next/head";
import Header from "../src/components/layouts/header/Header.js";
import Footer from "../src/components/layouts/footer/Footer.js";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<p className='text-red-700'>hello world</p>
			</main>

			<Footer />
		</>
	);
}
