import React, { createContext, useContext } from "react";

export const EmptyGlobalValue: number = 0;

interface GlobalContextType {
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
	value: 0,
	setValue: () => {},
});

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);

	if (context.value !== 0 && !context.value)
		throw new Error("GlobalContext must be use within a GlobalContextProvider");

	return context;
};
