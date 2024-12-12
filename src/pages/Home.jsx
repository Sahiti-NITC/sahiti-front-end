import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import AboutSahiti from "../components/AboutSahiti";
import Debate from "../components/Debate";
import Dates from "../components/Dates";
import Divider from "../components/Common/Divider";
import Divider2 from "../components/Common/Divider2";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
	return (
		<div className="w-screen min-h-screen bg-[#FF8343] overflow-clip">
			<div id="about" className=" w-full min-h-screen relative overflow-clip" >
				<MainContent />
			</div>

			<div id="about" className="relative flex flex-col items-center w-full h-screen overflow-clip" >
			<img src="/illustrations/Lace1.svg" alt="" srcset="" className=" absolute right-0 top-0 rotate-180 " />

				<Dates />
				
			</div>

			

			<div id="about" className=" flex flex-col items-center w-full min-h-screen bg-white" >
				<AboutSahiti />
			</div>

			<div id="debate" className=" flex flex-col items-center w-full min-h-screen bg-[#feefd7]"	>
				<Debate />
			</div>
			<Divider />

			<div id="gallery" className="w-[95%] min-h-screen bg-[#feefd7] flex justify-center p-4 mx-auto" >
				<div className="h-[80%] my-2">
					<Gallery />
				</div>
			</div>
		</div>
	);
};

export default Home;
