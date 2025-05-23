import { useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models";

type Data<T> = T | null;
type CustomError = Error | null;

type UseApiOptions<P> = {
	autoFetch?: boolean;
	Param: P;
}; /*  & (P extends null ? { Params?: P } : { Params: P }); */

interface UseApiResult<T, P> {
	data: Data<T>;
	loading: boolean;
	error: CustomError;
	fetch: (param: P) => void;
}

export const useApi = <T, P>(apiCall: (param: P) => UseApiCall<T>, options: UseApiOptions<P>): UseApiResult<T, P> => {
	const [data, setData] = useState<Data<T>>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<CustomError>(null);

	const fetch = useCallback(
		(param: P) => {
			const { call, controller } = apiCall(param);
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
		},
		[apiCall]
	);

	useEffect(() => {
		if (options?.autoFetch) return fetch(options.Param);
	}, [fetch, options?.Param, options?.autoFetch]);

	return { data, loading, error, fetch };
};
