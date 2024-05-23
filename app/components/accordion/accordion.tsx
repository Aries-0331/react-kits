"use client";
import { useState } from "react";
import data from "./data";

export default function Accordion() {
	const [selected, setSelected] = useState<string[]>([]);

	const handleSelectedState = (id: string) => {
		const copyOfSelected = [...selected];
		if (selected.includes(id)) {
			copyOfSelected.splice(selected.indexOf(id), 1);
		} else {
			copyOfSelected.push(id);
		}
		setSelected(copyOfSelected);
	};

	return (
		<div className="w-screen sm:w-[500px] flex flex-col items-center ">
			{data.map((item) => (
				<div key={item.id} className="w-full">
					<button
						className="bg-blue-500 text-white p-2 rounded-md my-2 w-full"
						onClick={() => {
							handleSelectedState(item.id);
						}}
					>
						{item.question}
					</button>
					{selected.includes(item.id) && <p>{item.answer}</p>}
				</div>
			))}
		</div>
	);
}
