import App from "./App";
import { AppRouter } from "./AppRouter";
import { ModalProvider } from "./components/Modal/context";
import { GlobalProvider } from "./context";
import ErrorBoundary from "./ErrorBoundary";

export const AppHookContainer = () => {
	return (
		<ErrorBoundary>
			<GlobalProvider>
				<ModalProvider>
					<App>
						<AppRouter />
					</App>
				</ModalProvider>
			</GlobalProvider>
		</ErrorBoundary>
	);
};
