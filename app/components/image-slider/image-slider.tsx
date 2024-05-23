"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({
	url,
	limit = 5,
	page = 1,
}: {
	url: string;
	limit?: number;
	page?: number;
}) {
	const [images, setImages] = useState([]);
	const [errMsg, setErrMsg] = useState("");
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	async function fetchImages(url: string) {
		console.log(errMsg);
		try {
			const response = await fetch(`${url}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (error: any) {
			console.log(error);
			setErrMsg(error.message);
			setLoading(false);
		}
	}
	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, []);

	if (loading) {
		return <div>Loading data ! Please wait</div>;
	}

	if (errMsg !== "") {
		return <div>Error occured ! {errMsg}</div>;
	}

	return (
		<div className="relative flex justify-center items-center w-600 h-600 py-4">
			<BsArrowLeftCircleFill
				className="absolute  w-8 h-8 text-white left-2"
				onClick={() =>
					setCurrentIndex(
						currentIndex === 0 ? images.length - 1 : currentIndex - 1
					)
				}
			/>
			{images &&
				images.map((image: any, index) => (
					<Image
						key={image.id}
						alt={image.download_url}
						src={image.download_url}
						width={500}
						height={500}
						className={`${currentIndex === index ? "visible" : "hidden"}`}
					/>
				))}
			<BsArrowRightCircleFill
				className="absolute w-8 h-8 text-white right-2"
				onClick={() =>
					setCurrentIndex(
						currentIndex === images.length - 1 ? 0 : currentIndex + 1
					)
				}
			/>
		</div>
	);
}
