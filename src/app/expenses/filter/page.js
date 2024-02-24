"use client"

const Filter = () => {

	const onFilterChange = (e) => {
		console.log(e.target.value)
	}

	return (
		<input
			type="text"
			placeholder="Search Expenses"
			onChange={(e) => onFilterChange(e.target.value)}
			className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
		/>
	);
};

export default Filter;
