"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ starNumber = 5 }) {
	const [hover, setHover] = useState(0);
	const [rating, setRating] = useState(0);

	return (
		<div className="flex items-center h-12">
			{[...Array(starNumber)].map((_, index) => {
				index += 1;
				return (
					<FaStar
						key={index}
						color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
						size={40}
						onClick={() => setRating(index)}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					/>
				);
			})}
		</div>
	);
}
