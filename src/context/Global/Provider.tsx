import { type ReactNode, useState } from "react";
import { GlobalContext, EmptyGlobalValue } from "./Context";
interface GlobalProps {
	children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProps) => {
	const [value, setValue] = useState<number>(EmptyGlobalValue);

	return <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>;
};
