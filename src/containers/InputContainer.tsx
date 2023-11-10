import React from "react";

interface InputProps {
	label: string;
	inputElement: JSX.Element;
}

const InputContainer: React.FC<InputProps> = ({ label, inputElement }) => {
	return (
		<div className="my-2 w-full">
			<label className="mx-4 inline-block text-right font-semibold text-lg text-gray-800 w-32">
				{label}
			</label>
			{inputElement}
		</div>
	);
};

export default InputContainer;
