import React, { useState, useRef } from "react";
import InputContainer from "./InputContainer";
import { QRCodeSVG } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";

const MainBody = () => {
	const [qr, setQr] = useState<boolean>(false);
	const [inputValues, setInputValues] = useState<any>({});

	const qrCodeRef = useRef(null);

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
		if (qrCodeRef.current) {
			html2canvas(qrCodeRef.current).then((canvas) => {
				const pngUrl = canvas
					.toDataURL("image/png")
					.replace("image/png", "image/octet-stream");
				const downloadLink = document.createElement("a");
				downloadLink.href = pngUrl;
				downloadLink.download = "qrcode.png";
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			});
		}
	};

	const handleReset = () => {
		setQr(false);
		setInputValues({});
	};

	return (
		<div className="w-1/2 border-2 border-gray-300 mx-auto my-4 text-center shadow-lg bg-white max-[769px]:w-2/3">
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
							value={inputValues.url}
							className="p-2 border-2 border-gray-300 lg:w-72 rounded-lg focus:outline-none focus:border-purple-300 md:w-48 max-[426px]:w-48 "
							placeholder="Enter url..."
							onChange={handleChange}
							required
							disabled={qr}
						/>
					}
				/>
				<InputContainer
					label="Select size: "
					inputElement={
						<select
							name="size"
							className="p-2 border-2 border-gray-300 lg:w-72 rounded-lg focus:outline-none focus:border-purple-300 md:w-48 max-[426px]:w-48"
							onChange={handleChange}
							required
							value={inputValues.size}
							disabled={qr}
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
				<div>
					<div
						className="flex flex-col items-center ease-in-out"
						ref={qrCodeRef}
					>
						<QRCodeSVG
							id="qrcode-gen"
							value={inputValues.url}
							size={inputValues.size}
						/>
					</div>
					<div className="flex justify-center">
						<button
							className="my-4 mx-2 p-2 bg-green-600 rounded-lg text-white hover:bg-green-700 w-36"
							onClick={handleReset}
						>
							<span className="mr-2">
								<FontAwesomeIcon icon={faArrowRotateLeft} />
							</span>
							Reset
						</button>
						<button
							className="my-4 mx-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 w-36"
							onClick={handleDownload}
						>
							<span className="mr-2">
								<FontAwesomeIcon icon={faDownload} />
							</span>
							Download
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MainBody;
