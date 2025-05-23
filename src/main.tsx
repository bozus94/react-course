import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { axiosInit } from "./services/";
import { AppHookContainer } from "./AppHookContainer";

axiosInit("https://rickandmortyapi.com/api");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppHookContainer />
	</StrictMode>
);
