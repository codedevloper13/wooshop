/** @format */

import Head from "next/head";
import Header from "../src/components/layouts/header/Header.js";
import Footer from "../src/components/layouts/footer/Footer.js";
import {HEADER_FOOTER_ENDPOINT} from "../src/utils/constants/endpoint.js";
import axios from "axios";

export default function Home({ data }) {
	const { header, footer } = data;
	return (
		<>
			<Header header={header} />
			<main>
				<p className='text-red-700'>hello world</p>
			</main>

			<Footer footer={footer} />
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get(HEADER_FOOTER_ENDPOINT);
	return {
		props: data || {},
		revalidate: 1,
	};
}
