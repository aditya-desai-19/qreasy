import React from "react";

interface InputProps {
	label: string;
	inputElement: JSX.Element;
}

const InputContainer: React.FC<InputProps> = ({ label, inputElement }) => {
	return (
		<div className="my-2 w-full">
			<label className="mx-4 inline-block text-right font-semibold text-lg text-text-color w-32 lg:w-28 lg:mx-2 sm:w-24 max-[426px]:text-center">
				{label}
			</label>
			{inputElement}
		</div>
	);
};

export default InputContainer;
