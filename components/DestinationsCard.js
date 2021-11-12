import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
function DestinationsCard({ img, title, price, buttonText }) {
  return (
    <div className="relative cursor-pointer hover:scale-105 transition duration-300 ease-out ">
      <div className="relative h-80 w-80   lg:h-[500px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl lg:rounded-none"
        />
      </div>
      <div className="absolute top-[80px] left-[50%] transform translate-x-[-50%]">
        <h1 className="font-abril text-3xl lg:text-4xl mb-4 text-center">
          {title}
        </h1>
        <p className="font-poppins text-center mb-4">Starting From</p>
        <p className="font-poppins text-white font-light text-3xl ">
          KES {price}
        </p>
      </div>
      <button className="flex items-center font-poppins absolute bottom-[50px] left-[50%] transform translate-x-[-50%] text-white bg-[#26AA2B] px-6 py-1 shadow-md rounded-full font-light  hover:shadow-xl active:scale-90 transition duration-150">
        {buttonText}
        <ChevronRightIcon className="h-4 ml-1" />
      </button>
    </div>
  );
}

export default DestinationsCard;
