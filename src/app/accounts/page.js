"use client"

import {useState} from "react";
import {Login, Register} from "@/components/accounts";

const Accounts = () => {
	const tabs = {
		login: {content: <Login/>},
		register: {content: <Register/>}
	}

	const [content, setContent] = useState("login");
	const tabButtons = Object.keys(tabs);

	const handleTabClick = (tab) => {
		setContent(tab);
	}

	return (
		<div>
			<div className={`flex items-center justify-center flex-wrap gap-4`}>
				{tabButtons.map((btn, index) => (
					<button
						key={index}
						onClick={() => handleTabClick(btn)}
						className={`uppercase py-2 px-4 rounded-md ${btn === content && "font-bold bg-gray-800"}`}
					>
						{btn}
					</button>
				))}
			</div>
			<div>{tabs[content].content}</div>
		</div>
	)
}

export default Accounts;