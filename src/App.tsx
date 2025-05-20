import "./App.css";
import { PromiseExample } from "./components/ErrorBoundariesExample";
import { Modal } from "./components/Modal";

function App() {
	return (
		<>
			<PromiseExample />
			<Modal>
				<p>El error boundary no me afecta</p>
			</Modal>
		</>
	);
}

export default App;
