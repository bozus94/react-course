import { useEffect, useState } from "react";

export const PromiseExample = () => {
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const dataFetch = async () => {
			try {
				throw new Error("la promesa hizo puff");
			} catch (err) {
				if (err instanceof Error) setError(err.message);
			}
		};

		dataFetch();
	}, []);

	if (error) throw error;

	return <h2>{error}</h2>;
};
