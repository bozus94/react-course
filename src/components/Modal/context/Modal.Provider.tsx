import { useState } from "react";
import { ModalContext } from "./index";

interface Props {
	children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
	const [state, setState] = useState<boolean>(false);
	return <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>;
};
