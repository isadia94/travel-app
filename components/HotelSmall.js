import Image from "next/image";
function HotelSmall({ rating, img, title, location, price }) {
  return (
    <div className="mb-4 border cursor-pointer   shadow-2xl pb-4 sm:mr-2">
      <div className="relative h-60 sm:h-60">
        <Image src={img} layout="fill" objectFit="cover" />
        <p className="absolute top-[15px] left-[10px] bg-yellow-500 font-poppins font-bold p-3">
          {rating}
        </p>
      </div>
      <div className="mt-4 font-poppins pl-2">
        <h3 className="font-bold">{title}</h3>
        <h4 className="text-sm text-gray-800">{location}</h4>
        <p className="text-xs font-medium mt-2">Starting From {price}</p>
      </div>
    </div>
  );
}

export default HotelSmall;
