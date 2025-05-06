import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Hector");

	const moreCount = () => {
		//batching => agrupa todos los cambios de estado en caso que hubiese mas de uno y renderiza al finalizar los mismos.
		setCount((count) => count + 1);
		setCount((count) => count + 1);
		setCount((count) => count + 1);
	};

	const changeName = () => {
		setName("molina");
	};
	return (
		<>
			<Button label={`count is ${count}`} parentMethod={moreCount} />
			<p>{name}</p>
			<Button label={`the name is: ${name}`} parentMethod={changeName} />
		</>
	);
}

export default App;
