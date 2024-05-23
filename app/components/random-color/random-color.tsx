"use client";
import { useEffect, useState } from "react";

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState("hex");
	const [color, setColor] = useState("#000000");

	function randomColorUtility(length: number) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateRandomHexColor() {
		// #678765
		const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		setColor(hexColor);
	}

	function handleCreateRandomRgbColor() {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);

		setColor(`rgb(${r},${g}, ${b})`);
	}

	useEffect(() => {
		typeOfColor === "hex"
			? handleCreateRandomHexColor()
			: handleCreateRandomRgbColor();
	}, [typeOfColor]);

	return (
		<div
			className="flex flex-col items-center w-full text-white p-4 rounded-md mt-4"
			style={{ backgroundColor: color }}
		>
			<div className="flex gap-6">
				<button
					className="border-2 border-gray-400 bg-gray-400  text-white p-1 rounded-md my-1"
					onClick={() => setTypeOfColor("hex")}
				>
					Choose HEX color
				</button>
				<button
					className="border-2 border-gray-400 bg-gray-400  text-white p-1 rounded-md my-1"
					onClick={() => setTypeOfColor("rgb")}
				>
					Chosse RGB color
				</button>
				<button
					className="border-2 border-gray-400 bg-gray-400  text-white p-1 rounded-md my-1"
					onClick={
						typeOfColor === "hex"
							? handleCreateRandomHexColor
							: handleCreateRandomRgbColor
					}
				>
					Random Create
				</button>
			</div>

			<div className="flex justify-center items-center gap-6 h-40  text-5xl">
				<h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
