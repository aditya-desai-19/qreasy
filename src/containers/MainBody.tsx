import React, { useState } from "react";
import InputContainer from "./InputContainer";
import { QRCodeSVG } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { toPng } from "react-svg-to-image";

const MainBody = () => {
	const [qr, setQr] = useState<boolean>(false);
	const [inputValues, setInputValues] = useState<any>({});

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setQr(true);
		console.log({ inputValues });
	};

	const handleDownload = () => {
		const canvas = document.getElementById("qrcode-gen");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = `qrcode.png`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);

		// console.log("download");---=
	};

	return (
		<div className="w-1/3 border-2 border-gray-300 mx-auto my-2 text-center shadow-lg">
			<form
				className="flex flex-col items-center my-2"
				onSubmit={handleSubmit}
			>
				<InputContainer
					label="Enter url: "
					inputElement={
						<input
							type="url"
							name="url"
							className="p-2 border-2 border-gray-300 w-56 rounded-lg focus:outline-none focus:border-purple-300"
							placeholder="Enter url..."
							onChange={handleChange}
							required
						/>
					}
				/>
				<InputContainer
					label="Select size: "
					inputElement={
						<select
							name="size"
							className="p-2 border-2 border-gray-300 w-56 rounded-lg focus:outline-none focus:border-purple-300"
							onChange={handleChange}
							required
						>
							<option value="" selected disabled hidden>
								Select size...
							</option>
							<option value={100}>100px x 100px</option>
							<option value={200}>200px x 200px</option>
							<option value={300}>300px x 300px</option>
							<option value={400}>400px x 400px</option>
						</select>
					}
				/>
				<button
					type="submit"
					className="my-2 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 w-28"
				>
					Get QR
				</button>
			</form>
			{qr && (
				<div className="flex flex-col items-center ease-in-out">
					<QRCodeSVG
						id="qrcode-gen"
						value={inputValues.url}
						size={inputValues.size}
					/>
					<button
						className="my-4 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 w-36"
						onClick={handleDownload}
					>
						<span className="mr-2">
							<FontAwesomeIcon icon={faDownload} />
						</span>
						Download
					</button>
				</div>
			)}
		</div>
	);
};

export default MainBody;
