import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./components/Modal/context/";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { axiosInit } from "./services/";

axiosInit("https://rickandmortyapi.com/api");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary>
			<ModalProvider>
				<App />
			</ModalProvider>
		</ErrorBoundary>
	</StrictMode>
);
