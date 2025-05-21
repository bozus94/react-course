import "./App.css";
import { type Character } from "./models/";
import { getCharacter } from "./services/api.services";
import { useApi } from "./hooks/useApi";

function App() {
	const { data, loading, error, fetch } = useApi<Character>(getCharacter(2), { autoFetch: true });

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
			<button onClick={fetch}>Buscar</button>
		</>
	);
}

export default App;
