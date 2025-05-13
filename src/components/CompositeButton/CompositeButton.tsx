import { type ReactNode } from "react";
import "./CompositeButton.css";
import { useGlobalContext } from "../../context";

interface Props {
	children: ReactNode;
	parentMethod: () => void;
}

interface ChildrenProps {
	children: ReactNode;
}

export const ChildrenButton = ({ children }: ChildrenProps) => {
	const { value } = useGlobalContext();
	return (
		<>
			<h1>{value}</h1>
			{children}
		</>
	);
};

export const CompositeButton = ({ children, parentMethod }: Props) => {
	const { setValue } = useGlobalContext();

	const handler = () => {
		setValue(10);
		parentMethod();
	};

	return (
		<button className="custom-button" onClick={handler}>
			{children}
		</button>
	);
};
