import React, { useState, useEffect } from "react";
import TestImg1 from "../assets/images/images/test1.jpg";
import TestImg2 from "../assets/images/images/test2.jpg";
import TestImg3 from "../assets/images/images/test3.jpg";

const Stories = () => {
	const reviews = [
		{
			name: "Emma Johnson",
			image: TestImg1,
			rating: 5,
			title: "Color Perfection Every Time",
			review:
				"I've had my hair colored at several salons before but nothing compares to the precision and artistry here. They created the perfect blend of highlights that look natural yet radiant. I've been receiving compliments nonstop.",
		},
		{
			name: "Olivia Davis",
			image: TestImg2,
			rating: 5,
			title: "Luxury I'll Keep Coming Back For",
			review:
				"The deep conditioning treatment was an absolute dream. My hair was dry and lifeless, but after just one session, it feels hydrated and smooth like never before. The ambiance of the salon made the whole experience even more relaxing.",
		},
		{
			name: "Sophia Martinez",
			image: TestImg3,
			rating: 4,
			title: "A Wonderful Experience",
			review:
				"The deep conditioning treatment was an absolute dream. My hair was dry and lifeless, but after just one session, it feels hydrated and smooth like never before. The ambiance of the salon made the whole experience even more relaxing.",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	// Automatically navigate the cards one by one
	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
				setIsAnimating(false);
			}, 600); // Animation duration matches the CSS
		}, 5000); // Change card every 5 seconds

		return () => clearInterval(interval);
	}, [reviews.length]);

	// Get the two cards to display
	const visibleCards = [
		reviews[currentIndex], // First card
		reviews[(currentIndex + 1) % reviews.length], // Second card
	];

	return (
		<div className="px-5 py-10 text-primaryText">
			<h2 className="mb-10 text-4xl text-center sm:text-6xl text-assent font-primaryFont">
				Style Stories Shared
			</h2>
			<div className="flex flex-col items-center overflow-hidden">
				<div
					className={`flex flex-wrap justify-center gap-6 transition-transform duration-500 ${
						isAnimating ? "translate-x-2/4" : "translate-x-0"
					}`}
					style={{ width: "200%" }} // Double width for sliding effect
				>
					{visibleCards.map((review, index) => (
						<div
							key={index}
							className={`flex flex-col items-start bg-secondary-100 max-w-2xl w-full gap-4 p-10 text-black rounded-[3.5rem] rounded-br-[1%] shadow-lg ${
								index === 1 ? "hidden sm:flex" : ""
							}`}
						>
							<div className="flex items-center gap-8">
								<img
									src={review.image}
									alt={review.name}
									className="object-cover w-24 h-24 
                             rounded-tl-[100%] rounded-tr-[100%] 
                             rounded-bl-[100%] rounded-br-[25%]"
								/>
								<div>
									<h3 className="text-3xl font-bold">{review.name}</h3>
									<div className="flex mb-2 space-x-2 text-2xl font-bold text-black">
										{Array.from({ length: review.rating }).map((_, index) => (
											<span key={index}>★</span>
										))}
									</div>
								</div>
							</div>
							<div>
								<h4 className="mt-4 text-2xl font-semibold">{review.title}</h4>
								<p className="mt-4 text-lg text-black">{review.review}</p>
							</div>
						</div>
					))}
				</div>

				{/* Dots Navigation */}
				<div className="flex justify-center mt-10">
					{reviews
						.slice()
						.reverse()
						.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(reviews.length - 1 - index)} // Reverse the index logic
								className={`w-4 h-4 mx-2 rounded-full ${
									index === reviews.length - 1 - currentIndex
										? "bg-white"
										: "bg-primary border-2 border-white"
								}`}
								aria-label={`Go to review ${reviews.length - index}`}
							></button>
						))}
				</div>
			</div>
		</div>
	);
};

export default Stories;
