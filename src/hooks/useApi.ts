import { useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models";

type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiOptions {
	autoFetch?: boolean;
}

interface UseApiResult<T> {
	data: Data<T>;
	loading: boolean;
	error: CustomError;
	fetch: () => void;
}

export const useApi = <T>(apiCall: UseApiCall<T>, options?: UseApiOptions): UseApiResult<T> => {
	const [data, setData] = useState<Data<T>>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<CustomError>(null);

	const fetch = useCallback(() => {
		const { call, controller } = apiCall;
		setLoading(true);

		call
			.then((response) => {
				setData(response.data);
				setError(null);
			})
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, [apiCall]);

	useEffect(() => {
		if (options && options.autoFetch) return fetch();
	}, [fetch, options]);

	return { data, loading, error, fetch };
};
