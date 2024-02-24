"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		setErrMsg("");
	}, [email]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			setErrMsg("Please input email");
			return;
		}

		const formData = JSON.stringify({email});
		console.log(formData);
		clearFields();
	}

	const clearFields = () => {
		setEmail("");
	}

	return (
		<section className={`flex items-center flex-col gap-4 text-center`}>
			<div>
				<h2 className={`font-bold text-2xl`}>Forgot your password</h2>
				<p>Enter your email to reset your password</p>

				<div className={`min-h-[50px] flex items-center justify-center`}>
					{errMsg && <p className={`uppercase font-bold text-red-500 text-lg`}>{errMsg}</p>}
				</div>
			</div>
			<form onSubmit={handleSubmit} className="max-w-sm">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="input mt-5"
				/>
				<button type="submit" className="submit_btn">reset password</button>
			</form>

			<Link href={`/accounts`} className={`underline`}>Back to Login</Link>
		</section>
	)
}

export default ForgotPassword;