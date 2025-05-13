import "./App.css";
import { CompositeButton, ChildrenButton } from "./components";
import { GlobalProvider } from "./context/";

function App() {
	const handler = () => {
		alert("hay me clickiaste");
	};

	return (
		<GlobalProvider>
			<CompositeButton parentMethod={handler}>
				<ChildrenButton>
					<p>Haciendo uso del context</p>
				</ChildrenButton>
			</CompositeButton>
		</GlobalProvider>
	);
}

export default App;
