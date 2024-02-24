"use client"

import { useState } from 'react';

const GoalForm = () => {
	const [goal, setGoal] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!goal.trim() || !amount.trim()) return;
		onAddGoal({ goal, amount: +amount });
		setGoal('');
		setAmount('');
	};

	const onAddGoal = (goal) => {
		console.log(goal);
	}

	return (
		<form onSubmit={handleSubmit} className="mt-4">
			<input
				type="text"
				placeholder="Goal"
				value={goal}
				onChange={(e) => setGoal(e.target.value)}
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
				Set Goal
			</button>
		</form>
	);
};

export default GoalForm;
