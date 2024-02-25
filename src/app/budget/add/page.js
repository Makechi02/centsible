"use client"

import { useState } from 'react';

const BudgetForm = () => {
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!category.trim() || !amount.trim()) return;
		onAddBudget({ category, amount: +amount });
		setCategory('');
		setAmount('');
	};

	const onAddBudget = (category) => {
		console.log(category);
	}

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<input
				type="text"
				placeholder="Category"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
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
				Add Budget
			</button>
		</form>
	);
};

export default BudgetForm;
