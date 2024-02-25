"use client"

import {FaChevronDown, FaChevronUp} from "react-icons/fa6";
import {useEffect, useState} from "react";

import budget from '@/data/budget.json';

const BudgetBody = () => {
	return (
		<div>
			{budget.map((category, index) => (
				<Category key={index} category={category} />
			))}
		</div>
	)
}

const Category = ({category}) => {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		if (category === budget[0]) setOpen(true);
	}, []);

	return (
		<div className={`my-4`}>
			<div
				onClick={() => setOpen(prev => !prev)}
				className={`flex flex-wrap justify-between items-center gap-4 p-4 bg-gray-900 mb-4`}
			>
				<div className={`flex items-center gap-2`}>
					{isOpen ? <FaChevronDown/> : <FaChevronUp/>}
					<h3 className={`capitalize font-bold`}>{category.category}</h3>
				</div>
				<p className={`text-sm`}>Available to Spend</p>
			</div>
			{isOpen && (
				<div className={`flex flex-col gap-1 px-4`}>
					{category?.subCategories?.map((subCategory, index) => {
						return <SubCategory subCategory={subCategory} key={index}/>
					})}
				</div>
			)}
		</div>
	)
}

const SubCategory = ({subCategory}) => {
	const amountNeeded = subCategory.allocated - subCategory.assigned - subCategory.spent;
	const value = subCategory.allocated - amountNeeded;

	return (
		<div className={`flex flex-wrap items-center justify-between gap-4 px-4 py-2 bg-blue-900 rounded-xl`}>
			<div>
				<h4 className={`font-bold capitalize`}>{subCategory['title']}</h4>
				<progress max={subCategory.allocated} value={value}/>
				<p>Ksh. {amountNeeded} more needed {subCategory['period']}</p>
			</div>
			<p>Ksh. {subCategory.assigned}</p>
		</div>
	)
}

export default BudgetBody;