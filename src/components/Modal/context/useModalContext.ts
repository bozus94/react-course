import { useContext } from "react";
import { ModalContext } from "./index";

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) throw new Error("Modal is being used outside the provide");

	return context;
};
