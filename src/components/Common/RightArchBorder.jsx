import React from 'react'
import gsap from 'gsap';

const RightArchBorder = () => {
	const ref1 = React.useRef(null);

	React.useEffect(() => {
		gsap.fromTo(
		  ref1.current,
		  {
			opacity: 0.6,
			x: 100,
		  },
		  {
			opacity: 1,
			x: 0,
			duration: 2,
			ease: "power4.out",
		  }
		);
	  }, []);

  return (
    <div ref={ref1} className="absolute top-0 -right-14 md:right-0 h-screen flex flex-col items-end">
				<img
					src="/illustrations/borderTopRight.svg"
					alt="Right Illustration"
					className="w-[241px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
				<img
					src="/illustrations/border-block.svg"
					alt="Left Illustration block"
					className="w-[104px]"
				/>
			</div>
  )
}

export default RightArchBorder
