import {BudgetHeader} from "@/components/budget";
import BudgetBody from "@/components/budget/BudgetBody";

const Budget = () => {
	return (
		<div className={`min-h-[100svh]`}>
			<BudgetHeader/>
			<div className={`p-8`}>
				<h1 className={`font-bold text-4xl`}>Budget</h1>
			</div>
			<BudgetBody/>
		</div>
	)
}

export default Budget;