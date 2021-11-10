import Image from "next/image";
import Hero from "../images/img1.jpg";
function Banner() {
  return (
    <div className="relative">
      <div className="relative h-[600px] ">
        <Image src={Hero} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-1/2 left-[50%] transform translate-x-[-50%]">
        <h1 className="font-abril text-3xl text-white md:text-5xl lg:text-7xl">
          Iceland
        </h1>
      </div>
    </div>
  );
}

export default Banner;
