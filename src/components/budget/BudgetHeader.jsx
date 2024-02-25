import {months} from "@/data/constants";
import {FaChevronCircleDown, FaCog, FaPenSquare} from "react-icons/fa";
import {FaBarsProgress} from "react-icons/fa6";

const BudgetHeader = () => {
	return (
		<div className={`flex flex-wrap items-center justify-between p-4 bg-gray-800`}>
			<DatePicker/>
			<div className={`flex flex-wrap gap-4 text-xl`}>
				<button title={`Select view`}><FaBarsProgress/></button>
				<button title={`Edit categories`}><FaPenSquare/></button>
				<button title={`Settings`}><FaCog/></button>
			</div>
		</div>
	)
}

const DatePicker = () => {
	const month = months[new Date().getMonth()];
	const year = new Date().getFullYear();

	return (
		<div>
			<div>
				<label htmlFor={`date`} className={`flex gap-1 items-center font-bold cursor-pointer`}>
					<span className={`hidden sm:inline`}>{month} </span>
					<span className={`sm:hidden`}>{month.substring(0, 3)} </span>
					{year}
					<FaChevronCircleDown/>
				</label>
				{/*<input type={`date`} id={`date`} />*/}
			</div>
		</div>
	)
}

export default BudgetHeader;