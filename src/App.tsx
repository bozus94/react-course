import "./App.css";
import { Modal } from "./components/Modal";
import { useModalContext } from "./components/Modal/context";

function App() {
	const { setState } = useModalContext();

	const openModal = () => setState(true);

	return (
		<>
			<Modal>
				<div>
					<h2>Titulo del modal </h2>
					<h3>subtitulo del modal</h3>
				</div>
			</Modal>
			<button onClick={openModal}>Open Modal</button>
		</>
	);
}

export default App;
