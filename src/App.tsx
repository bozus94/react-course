import "./App.css";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function App({ children }: Props) {
	return (
		<>
			<h1>Header</h1>
			{children}
			<h1>Footer</h1>
		</>
	);
}

export default App;
