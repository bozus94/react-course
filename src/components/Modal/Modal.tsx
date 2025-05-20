import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context";
import "./Modal.css";

interface Props {
	children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
	const { state, setState } = useModalContext();
	const modalRef = useRef<HTMLDivElement>(null);
	console.log(state);
	const closeModal = () => {
		setState(false);
	};

	const modalRoot = document.getElementById("modal")!;
	const listener = "keydown";

	const dontPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setState(false);
				throw new Error("Probando el ErrorBoundary");
			}
		};

		if (state) {
			document.addEventListener(listener, handleEscape);
		}

		return () => document.removeEventListener(listener, handleEscape);
	}, [setState, state]);

	if (!state || !modalRoot) return null;

	return createPortal(
		<div className="overlay" onClick={closeModal}>
			<div className="modal" ref={modalRef} onClick={dontPropagation}>
				{children}
				<button className="close-button" onClick={closeModal}>
					Close
				</button>
			</div>
		</div>,
		modalRoot
	);
};
