"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [areTermsAgreed, setTermsAgreed] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		setErrMsg("");
	}, [email, password, name]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			setErrMsg("Please input name");
			return;
		}

		if (!email) {
			setErrMsg("Please input email");
			return;
		}

		if (!password) {
			setErrMsg("Please input password");
			return;
		}

		if (!areTermsAgreed) {
			setErrMsg("Please agree to our terms and conditions");
			return;
		}

		const formData = JSON.stringify({name, email, password});
		console.log(formData);
		clearFields();
	}

	const clearFields = () => {
		setName("");
		setEmail("");
		setPassword("");
		setTermsAgreed(false);
	}

	return (
		<section className={`flex items-center flex-col gap-4 text-center`}>
			<div className={`min-h-[50px] flex items-center justify-center`}>
				{errMsg && <p className={`uppercase font-bold text-red-500 text-lg`}>{errMsg}</p>}
			</div>
			<form onSubmit={handleSubmit} className="max-w-sm">
				<input
					type="text"
					placeholder="Full Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="input"
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="input mt-5"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="input mt-5"
				/>

				<div className={`mt-5`}>
					<label>
						<input type="checkbox" onChange={() => setTermsAgreed(prev => !prev)} checked={areTermsAgreed} />
						{" "}Agree to our{" "}
						<Link
							href={`/accounts/terms-and-conditions`}
							className={`underline`}
						>
							terms & conditions
						</Link>
					</label>
				</div>

				<button type="submit" className="submit_btn">register</button>
			</form>
		</section>
	)
}

export default Register;