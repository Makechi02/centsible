"use client"

import { useState } from 'react';

const ExpenseForm = () => {
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!description.trim() || !amount.trim()) return;
		const newExpense = {
			id: Math.random().toString(),
			description,
			amount: +amount,
		};
		onAddExpense(newExpense);
		setDescription('');
		setAmount('');
	};

	const onAddExpense = (expense) => {
		console.log(expense);
	}

	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4">
			<input
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
			/>
			<button
				type="submit"
				className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
			>
				Add Expense
			</button>
		</form>
	);
};

export default ExpenseForm;
