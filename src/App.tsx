import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
	/* explicación useEffect

		//comunicarnos con un endpoint (endpoint => entidad fuera del componente);
		//operaciones asyncronas
		//parámetros de entrada

		useEffect(
			() => {
				//=> se ejecuta:
				//=> cuando se monta un componente
				//=> cuando hay un cambio en el estado que es dependiente

				return () => {
					//=> el return se ejecuta cuando se destruye el componente
					//=> se utiliza para ahorrar consumo de memoria
				};
			},
			[] //=> arreglo de dependencia el useEffect esta pendiente de un cambio para ejecuta la lógica dentro de el, si esta vació la lógica se ejecuta cuando monta el componente.
		); 
	*/

	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);

			const response = await fetch("https://jsonplaceholder.typicode.com/users");
			if (!response.ok) throw new Error("Error al cargar los datos");

			const jsonData = await response.json();
			setData(jsonData);
		} catch (error) {
			setError(error as string);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) return <p>cargando .....</p>;
	if (error) return <p>Ha ocurrido un error: {error.toString()}</p>;
	return JSON.stringify(data);
}

export default App;
