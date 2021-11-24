import Image from "next/image";
import hot1 from "../images/hot1.jpg";
import { StarIcon } from "@heroicons/react/solid";

function HotelCard() {
  return (
    <div className="flex space-x-2 md:space-x-4 py-4 mt-6 border-b border-gray-400">
      <div class="relative h-[100px] w-[120px] md:h-[300px] md:w-[500px] cursor-pointer hover:scale-105 transition transform duration-150 ease-out ">
        <Image
          src={hot1}
          layout="fill"
          objectFit="cover"
          className="rounded-sm "
        />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <h3 className="text-sm max-w-[120px] text-gray-900 md:text-2xl md:max-w-xl">
            Villa Rosa Kempinski
          </h3>
          <div className="flex items-center bg-yellow-400 p-1">
            <p>9.8</p>
            <StarIcon className="h-4" />
          </div>
        </div>

        <p className="text-[10px] text-gray-700 ">Starting From</p>
        <p className="text-red-700 md:text-xl">
          KES 33,479/
          <span className="text-[10px] text-gray-600">1 Night, 2 Adults</span>
        </p>
      </div>
    </div>
  );
}

export default HotelCard;
