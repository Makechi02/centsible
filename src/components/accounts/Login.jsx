"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			setErrMsg("Please input email");
			return;
		}

		if (!password) {
			setErrMsg("Please input password");
			return;
		}

		const formData = JSON.stringify({email, password});
		console.log(formData);
		clearFields();
	}

	const clearFields = () => {
		setEmail("");
		setPassword("");
	}

	return (
		<section className={`flex flex-col gap-4 text-center`}>
			<div className={`min-h-[50px] flex items-center justify-center`}>
				{errMsg && <p className={`uppercase font-bold text-red-500 text-lg`}>{errMsg}</p>}
			</div>
			<form onSubmit={handleSubmit} className="max-w-sm">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="input"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="input mt-5"
				/>
				<button type="submit" className="submit_btn">Login</button>
			</form>
			<Link
				href={`/accounts/forgot-password`}
				className={`underline`}
			>
				Forgot your password?
			</Link>
		</section>
	)
}

export default Login;