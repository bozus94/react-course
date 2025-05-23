import "./App.css";
import { type Character } from "./models/";
import { getCharacter } from "./services/";
import { useApi } from "./hooks/";

function App() {
	const { data, loading, error, fetch } = useApi<Character, number>(getCharacter, { autoFetch: false, Param: 2 });

	if (loading) return <p>Cargando....</p>;

	if (error)
		return (
			<p>
				Oops, ocurrió un error en la petición <br /> Error: {error.message}
			</p>
		);

	return (
		<>
			<div>{JSON.stringify(data)}</div>
			<button onClick={() => fetch(2)}>Buscar</button>
		</>
	);
}

export default App;
