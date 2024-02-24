const ExpenseList = () => {
	const expenses = [
		{
			id: 1,
			description: "Bought a laptop",
			amount: 45000
		}
	]

	return (
		<ul className="mt-4">
			{expenses.map((expense) => (
				<li key={expense.id} className="border-b border-gray-300 py-2">
					{expense.description} - ${expense.amount}
				</li>
			))}
		</ul>
	);
};

export default ExpenseList;
