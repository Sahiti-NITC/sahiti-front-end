import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Common/Button";
import Gallery from "../components/Gallery/Gallery";
import RightArchBorder from "../components/Common/RightArchBorder";
import LeftArchBorder from "../components/Common/LeftArchBorder";

const About = () => {
	return (
		<div className="bg-[#FF8343] p-0 m-0 relative overflow-clip h-max">
			{/* Left  Border */}
			<LeftArchBorder />

			{/* Right Border */}
			<RightArchBorder />

			<div
				id="about"
				className="h-max flex flex-col items-center px-2 md:px-10 lg:px-16 overflow-hidden relative "
			>
				<Navbar />
				<h1 className="text-white md:text-7xl text-4xl font-bold mt-8">About Us</h1>
				<h1 className="text-white md:text-4xl text-3xl mx-12 text-center  font-bold mt-8">
				The Literary and Debating Club, NITC</h1>
				<img className="h-[150px] w-auto mt-6" src="/logos/lnd.png" alt="alt" />
				<div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4 md:space-y-0 mt-6">
					<Button
						link="/brochures/Sahiti-Brochure.pdf"
						bgColor="#FFFDD0"
						textColor="#FF8343"
						isPDF={true}
					>
						View Brochure
					</Button>
				</div>
				<p className="text-white m-10 mt-7 mb-3 px-4 md:px-52 text-xl text-justify">
					<a href="https://www.lndnitc.org/" className="font-bold underline ">
						The Literary and Debating Club
					</a>{" "}
					of NIT Calicut is one of the oldest and the most prestigious clubs of
					NITC. Kindled by the passion for the world of literature, the club is
					a stage for people to to flaunt their belletristic, oratory and
					expressive genius. Through the years, we have been striving
					persistently to spread our expense in close accordance with our rule
					of thumb, 'Deeds not Words'. Organizing competitions in extempore,
					elocution, debates, quizzes and so much more has helped the club live
					up to and beyond the expectations for which it was set up.
					<br />
					<br />
					To explore the various ventures of LnD, visit :
				</p>
				<Button
					link="https://links.lndnitc.org/"
					bgColor="#FFFDD0"
					textColor="#FF8343"
				>
					links.lndnitc.org
				</Button>

				<hr />

				<br />
				{/* <h1 className="text-white md:text-5xl text-3xl mx-12 text-center  font-bold mt-8">
					Center For Cultural And Art Relations NITC</h1> */}
				<img
					className="h-[200px] w-auto mt-6"
					src="/logos/ccar-logo.png"
					alt="alt"
				/>

				<p className="text-white m-10 mt-7 mb-3 px-4 md:px-52 text-xl text-justify">
					<a
						href="https://nitc.ac.in/multidiscilplinary-centres/centre-for-cultural-and-art-relations-ccar"
						className="font-bold underline "
					>
						The Center for Cultural and Art Relations
					</a>{" "}
					at NIT Calicut promotes a holistic approach to engineering education
					by integrating fine and performing arts into the curriculum. Aligned
					with the NEP 2020 vision, CCAR nurtures creativity, innovation, and
					multidisciplinary learning through workshops, micro-credit courses,
					and public events. By blending arts and engineering, the center
					inspires students to explore new perspectives, develop essential
					skills like coordination and confidence, and pursue their hobbies
					alongside academics, fostering a community of artistic engineers.
					<br />
					<br />
					To explore the various ventures of the CCAR, visit :
				</p>
				<Button
					link="https://nitc.ac.in/multidiscilplinary-centres/centre-for-cultural-and-art-relations-ccar"
					bgColor="#FFFDD0"
					textColor="#FF8343"
				>
					CCAR NITC
				</Button>
			</div>

			{/* Second Section */}
			{/* <div className="absolute top-screen z-10 -left-14 md:left-0 h-screen rotate-180">
        <img
          src="/illustrations/borderTopRight.svg"
          alt="Left Illustration for Second Section"
          className="h-full"
        />
      </div>

      <div className="absolute top-screen z-10 -right-14 md:right-0 h-screen rotate-180">
        <img
          src="/illustrations/borderTopLeft.svg"
          alt="Right Illustration for Second Section"
          className="h-full"
        />
      </div> */}

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

export default About;
