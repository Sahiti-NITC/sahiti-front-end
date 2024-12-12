import React from "react";
import Button from "./Common/BiggerButton";

const AboutSahiti = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center w-full px-4 md:px-8 lg:px-16 my-16 lg:my-10 medHeight:my-8 ">
			{/* Logo Image */}
			<img
				className="lg:w-[300px] w-[200px] h-auto"
				src="/logos/logo-orange.png"
				// src="/logos/lnd-orange.jpg"
				alt="Sahiti Logo"
			/>

			<div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4 md:space-y-0 mt-6 w-max">
				<Button
					link="/brochures/Sahiti-Brochure.pdf"
					bgColor="#FF8343"
					textColor="#FFFDD0"
					isPDF={true}
				>
					View Brochure
				</Button>
			</div>

			{/* Text Content */}
			<div className="text-[4.4vw] ipadAir:text-[3vw] ipadPro:text-[2.7vw] smallHeight:text-[3.6vw] md:text-[2.7vw] lg:text-[1.35vw] font-poppins w-[90vw] ipadAir:w-[80vw] smallHeight:w-[85vw] md:w-[75vw] ipadPro:w-[75vw] lg:w-[55vw] mt-[6vw] lg:mt-[2vw] text-[#FF7900] text-justify leading-relaxed">
				<p>
					Welcome to the world of Sahiti, the literature fest organized by the
					Literary and Debating Club of NITC! Leveraging Kozhikode's designation
					as 'The City of Literature,' our aim is to enhance our contribution to
					this literary legacy by actively promoting and increasing the reading
					habits among students.
				</p>
				<p className="mt-4">
					Through a carefully curated series of engaging workshops, lectures,
					and cultural events, our goal is to revive the love for literature
					among today’s youngsters.
				</p>
				<p className="mt-4">
					Join us on the <strong>11th and 12th of January, 2025</strong> to
					immerse yourself in a world where words inspire and ideas connect!
				</p>
			</div>
			<div className="h-[6vh] md:h-[10vh]"></div>
		</div>
	);
};

export default AboutSahiti;
