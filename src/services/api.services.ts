import axios from "axios";
import { type Character, type UseApiCall } from "../models/";
import { loadAbort } from "../utilities";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter = (id: number): UseApiCall<Character> => {
	const controller = loadAbort();
	return {
		call: axios.get<Character>(`${BASE_URL}/character/${id}`, { signal: controller.signal }),
		controller,
	};
};

export const newCharacter = (character: Character): UseApiCall<null> => {
	const controller = loadAbort();
	return {
		call: axios.post<null>(`${BASE_URL}/characters`, character, { signal: controller.signal }),
		controller,
	};
};
