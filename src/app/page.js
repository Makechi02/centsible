"use client"

import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";

const Home = () => {
	const isLoggedIn = false;
	const router = useRouter();

	useLayoutEffect(() => {
		!isLoggedIn && router.push("/accounts");
	}, []);

	return (
		<div>
		</div>
	)
}

export default Home;