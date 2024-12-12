import React from 'react';
import gsap from "gsap";

const LeftArchBorder = () => {
  const ref1 = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      ref1.current,
      {
        opacity: 0.6,
		x: -100,
      },
      {
        opacity: 1,
		x: 0,
        duration: 3,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div ref={ref1} className="absolute top-0 -left-14 md:left-0 md:h-screen h-[50%]">
      <img
        src="/illustrations/borderTopLeft.svg"
        alt="Left Illustration"
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
  );
};

export default LeftArchBorder;
