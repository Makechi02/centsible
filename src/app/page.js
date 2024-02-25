"use client"

import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";
import {AccountsHeader} from "@/components/accounts";

const Home = () => {
	const isLoggedIn = true;
	const router = useRouter();

	useLayoutEffect(() => {
		!isLoggedIn && router.push("/accounts");
	}, []);

	return (
		<div>
			<AccountsHeader/>
		</div>
	)
}

export default Home;