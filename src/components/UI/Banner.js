/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import image1 from "../../Images/image2.jpg";
import image4 from "../../Images/image4.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image src={image4} height={480} width={1920} />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image src={image1} height={180} width={1920} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
