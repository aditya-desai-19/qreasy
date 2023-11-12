import React, { useState, useEffect } from "react";

interface TypeWriterProps {
	text: string;
	delay: number;
	infinite?: boolean;
	className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
	text,
	delay,
	className,
	infinite,
}) => {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setCurrentText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, delay);

			return () => clearTimeout(timeout);
		} else if (infinite) {
			setCurrentIndex(0);
			setCurrentText("");
		}
	}, [currentIndex, delay, text]);
	return <span className={className}>{currentText}</span>;
};

export default TypeWriter;
