import Accordion from "@/app/components/accordion/accordion";
import RandomColor from "./components/random-color/random-color";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/image-slider";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between w-screen gap-4">
			<Accordion />
			<RandomColor />
			<StarRating starNumber={10} />
			<ImageSlider url="https://picsum.photos/v2/list" limit={10} page={2} />
		</main>
	);
}
