import "./App.css";
import { useFetch } from "./hooks/useFetch";

interface Data {
	userId: string;
	id: number;
	title: string;
	completed: string;
}

function App() {
	const { data, loading, error } = useFetch<Data>("https://jsonplaceholder.typicode.com/todos/1");

	if (loading) return <p>cargando .....</p>;
	if (error) return <p>Ha ocurrido un error: {error.message}</p>;
	return JSON.stringify(data);
}

export default App;
