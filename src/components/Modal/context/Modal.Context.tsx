import type React from "react";
import { createContext } from "react";

export interface ContextProps {
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ContextProps>({
	state: false,
	setState: () => null,
});
