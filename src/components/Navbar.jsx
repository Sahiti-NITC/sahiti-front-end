import React from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {

	const ref1 = React.useRef(null);

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

	gsap.fromTo(
		ref1.current,
		{
			opacity: 0.6,
			y: -400,
		},
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 0.5,
			ease: "power4.out"
		}
	)

	return (
		<div ref={ref1} className="navbar font-poppins text-[#FFEFD5] mt-4">

			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="h-8 w-8 stroke-black bg-white p-1 rounded-full shadow-black shadow-2xl  "
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-[#FFEFD5] text-[#FF8343] rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/debate">Debate</Link>
						</li>
						<li>
							<Link to="/sponsors">Sponsors</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="navbar-center hidden lg:flex border border-orange-300 rounded-full  ">
				<ul className="menu menu-horizontal px-1 text-xl text-white">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/debate">Debate</Link>
					</li>
					<li>
						<Link to="/sponsors">Sponsors</Link>
					</li>
					{/* <li>
						<Link to="/contact">Contact</Link>
					</li> */}
				</ul>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
};

export default Navbar;
