import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
	axiosInstance = axios.create({ baseURL });
};

const setupInterceptors = () => {
	axiosInstance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			const token = localStorage.getItem("token");
			if (token) config.headers.set("authorization Bearer: " + token);
			console.log(`Request made to ${config.url}`);
			return config;
		},
		(err) => Promise.reject(err)
	);

	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			console.log(`Response from ${response.config.url}`, {
				data: response.data,
				status: response.status,
			});
			return response;
		},
		(err) => {
			if (err.response) {
				console.log(`Error response from ${err.response.config.url}`);
			}
			{
				console.log(`Error: ${err}`);
			}

			return Promise.reject(err);
		}
	);
};

export const axiosInit = (url: string) => {
	createAxios(url);
	setupInterceptors();

	return axiosInstance;
};
