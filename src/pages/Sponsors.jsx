import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Common/BiggerButton";
import Gallery from "../components/Gallery/Gallery";

import LeftArchBorder from '../components/Common/LeftArchBorder'
import RightArchBorder from '../components/Common/RightArchBorder'

const Sponsors = () => {
	return (
		<div className="bg-[#FF8343] p-0 m-0 relative overflow-clip h-max">
			{/* Left  Border */}
			<LeftArchBorder />

			{/* Right Border */}
			<RightArchBorder />

			<div
				id="about"
				className="h-max flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden relative "
			>
				<Navbar />
				<h1 className="text-white text-3xl md:text-5xl font-bold mt-8">
					Call to Sponsors
				</h1>
				<img
					className="h-[150px] w-auto mt-6"
					src="/logos/logo-cream.png"
					alt="alt"
				/>
				<div className="mt-7"></div>
				<Button
					link="/brochures/Marketing-Sahiti-Brochure.pdf"
					bgColor="#FFFDD0"
					textColor="#FF8343"
					isPDF={true}
				>
					Marketing_Brochure
				</Button>

				<h2 className="text-white text-3xl font-bold mt-8 text-left">
					Why Sponsor Sahiti?
				</h2>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					<strong>Sponsoring Sahiti</strong> will be an excellent opportunity to
					enhance your brand's visibility and connect with the target audience.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					Sahiti will attract a wide range of audience across various age
					groups, from school-going children to professional adults. Coming from
					various institutes across the state and country, they 
					will be a part of the event's footfall. Via sponsorship, your brand
					can make a lasting impact on the diverse audience.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					Along with this, your logo will be prominently displayed over the
					event banners, material and social media campaigns. This will provide
					your brand with exposure before, during, and after the event.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					Sahiti will host various literary and non-literary events spanning
					across various domains. Aligning your brand with related domains will
					demonstrate your commitment to fostering development to the
					participants.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					Sahiti will be a great platform to gain direct access to possible
					clients and customers. Your presence as a sponsor will position you as
					a trusted part of the community.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					We offer <strong>customized sponsorship packages</strong> to suit your
					needs and budget. Whether you aim to engage directly with your target
					audience, launch a product or boost brand awareness, we have options
					suiting your aim.
				</p>

				<p className="text-white m-10 mt-3 mb-3 px-4 md:px-52 text-lg md:text-xl text-justify">
					Sahiti aims to not just be an event, but an unforgettable experience
					for its audience. As a sponsor, you can help us create these
					everlasting memories for the audience by associating your brand with
					an event they will talk about for years.
				</p>

				<br />
			</div>

			<div
				id="gallery"
				className=" min-h-screen bg-[#feefd7] flex justify-center mt-[5vh] mx-auto"
				style={{
					width: "calc('100%-208px')",
				}}
			>
				<div className="h-[100%] my-2">
					<Gallery />
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
