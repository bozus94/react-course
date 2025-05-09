import "./App.css";
import { CompositeButton, ChildrenButton } from "./components";

function App() {
	const handler = () => {
		alert("hay me clickiaste");
	};

	return (
		<CompositeButton parentMethod={handler}>
			<ChildrenButton>
				<div>hola</div>
			</ChildrenButton>
		</CompositeButton>
	);
}

export default App;
