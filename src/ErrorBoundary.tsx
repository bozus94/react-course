/* 
	Los ErrorBoundary se utilizan para manejar error que se ejecutan en el ciclo de vida del renderizado de un componente
	Los errores asíncronos(promesas, setTimeout) no se detectan automáticamente, para ello debemos manejarlos y luego tirarlos en el ciclo de vida del renderizado.
*/

import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryState {
	hasError: boolean;
}

interface ErrorBoundaryProps {
	children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		console.log("Derived error. ", error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log("Error: ", error);
		console.log("Error info: ", errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oops, i did it again</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
