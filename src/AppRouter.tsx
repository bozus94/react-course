import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Login } from "./public/";
import { PrivateGuard } from "./guard/";
import { PrivateRoute } from "./private";
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route element={<PrivateGuard />}>
					<Route path="/private/*" element={<PrivateRoute />} />
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
