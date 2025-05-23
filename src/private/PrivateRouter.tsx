import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound";

export const PrivateRoute = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to="/dashboard" />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/About" element={<Dashboard />} />
		</RoutesWithNotFound>
	);
};
