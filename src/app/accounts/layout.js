import {AccountsHeader} from "@/components/accounts";

const Layout = ({children}) => {
	return (
		<div className={`bg-gray-950 text-gray-300 min-h-[100svh] px-4 py-8 flex flex-col justify-center items-center gap-8`}>
			<AccountsHeader/>
			{children}
		</div>
	)
}

export default Layout;