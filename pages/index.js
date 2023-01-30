/** @format */

import Head from "next/head";
import Header from "../src/components/layouts/header/Header.js";
import Footer from "../src/components/layouts/footer/Footer.js";
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
	const { data } = await axios.get(
		`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
	);
	return {
		props: data || {},
		revalidate: 1,
	};
}
