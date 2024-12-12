import React from "react";
import Button from "../components/Common/Button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollToPlugin);

const MainContent = () => {
	const scrollToSection = (id) => {
		const target = document.getElementById(id);
		if (target) {
			gsap.to(window, {
				duration: 1.2,
				scrollTo: { y: target.offsetTop, autoKill: true },
				ease: "power2.inOut",
			});
		}
	};

	return (
		<div className="relative flex flex-col items-center min-h-screen  ">
			<div className="absolute top-0 w-full">
				<Navbar />	
			</div>
			
			<img src="/illustrations/Lace1.svg" alt="" srcset="" className=" absolute left-0 bottom-0 " />
			<div className=" sm:block hidden big-circle w-[100vw] h-[100vh] bg-white absolute origin-center -right-[50vw] top-[30vh] rounded-full  "></div>
			<div className=" sm:block hidden big-circle w-[80vw] h-[70vh] bg-white absolute origin-center -right-[50vw] top-[0vh] rounded-full  "></div>
			
			<div className=" block sm:hidden big-circle w-[120vh] h-[120vh] bg-white absolute origin-center -bottom-[80vh] rounded-full  "></div>

			<div className="w-full h-screen flex flex-col md:flex-row ">
				<div className="w-[100%] sm:w-[50%] h-[60%] sm:h-full flex flex-col justify-center items-center sm:p-0 p-4 ">
					<h3 className="font-caslon sm:text-9xl text-6xl text-white sm:p-5 p-2 sm:px-12 px-2 w-full sm:text-left text-center ">
						SAHITI
					</h3>
					<p className="font-poppins text-justify sm:text-xl text-base text-white p-5 sm:px-12 px-2 w-full">
						Welcome to Sahiti, Kozhikode’s literary gem! Immerse yourself in a
						celebration of words with thought-provoking discussions, captivating
						readings, and engaging workshops.
					</p>
					<p className="font-poppins leading-tight sm:text-xl text-base text-white p-2 sm:px-12 px-2 text-left w-full">
						Join us at Sahiti, where literature meets inspiration!
					</p>
					<p className="font-poppins font-bold leading-tight sm:text-3xl text-xl sm:text-left text-center text-white p-4 sm:px-12 px-2 w-full">
						January 11 & 12, 2025
					</p>
				</div>
				
				<div className="w-[100%] sm:w-[40%] sm:h-full h-[50%] flex flex-col items-center justify-center absolute sm:right-0 bottom-0  ">
					<div className="flex flex-col items-center h-max justify-center pt-10">
						<img
							className="md:h-[400px] sm:h-[300px] h-[200px] "
							src="/logos/logo-orange.png"
							alt="Sahiti Logo"
						/>
						<Button link="/about" bgColor="#FF8343" textColor="#FFFDD0">
							Learn More
						</Button>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default MainContent;
