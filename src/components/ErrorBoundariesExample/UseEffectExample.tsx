import { useEffect } from "react";

export const UseEffectExample = () => {
	useEffect(() => {
		throw new Error("Oops, Hems colisionado con ub error :(");
	});

	return <div></div>;
};
