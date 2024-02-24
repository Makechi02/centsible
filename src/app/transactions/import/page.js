"use client"

import { useState } from 'react';

const TransactionForm = () => {
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!description.trim() || !amount.trim()) return;
		onAddTransaction({ description, amount: +amount });
		setDescription('');
		setAmount('');
	};
	
	const onAddTransaction = (transaction) => {
		console.log(transaction)
	}

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<input
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				className="border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				className="border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
			/>
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none">
				Add Transaction
			</button>
		</form>
	);
};

export default TransactionForm;
