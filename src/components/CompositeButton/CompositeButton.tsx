import { ReactNode } from "react";
import "./CompositeButton.css";

interface Props {
	children: ReactNode;
	parentMethod: () => void;
}

interface ChildrenProps {
	children: ReactNode;
}

export const ChildrenButton = ({ children }: ChildrenProps) => {
	return <>{children}</>;
};

export const CompositeButton = ({ children, parentMethod }: Props) => {
	return (
		<button className="custom-button" onClick={parentMethod}>
			{children}
		</button>
	);
};
