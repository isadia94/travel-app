import Image from "next/image";
function HotelLarge({ rating, img, title, location, price }) {
  return (
    <div className="mb-4 border relative h-60 cursor-pointer  shadow-2xl lg:h-[500px] pb-4 sm:mr-2">
      <div className="relative h-60  lg:h-[500px]">
        <Image src={img} layout="fill" objectFit="cover" />
        <p className="absolute top-[15px] left-[10px] bg-yellow-500 px-4 py-2 font-poppins font-bold ">
          {rating} superb
        </p>
      </div>
      <div className="mt-4 font-poppins absolute bottom-10 pl-2">
        <h3 className="font-bold text-white">{title}</h3>
        <h4 className="text-sm text-gray-300">{location}</h4>
        <p className="text-xs text-white font-medium mt-2">
          Starting From KES {price}
        </p>
      </div>
    </div>
  );
}

export default HotelLarge;
