import { useRef } from "react";

export const FocusRef = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (!inputRef.current) {
			console.log("No existe referencia al elemento");
			return;
		}

		inputRef.current.focus();
	};

	return (
		<>
			<input ref={inputRef} type="text" name="name" placeholder="Escribe algo aqui..." />
			<br />
			<button onClick={handleClick}>Focus</button>
		</>
	);
};
