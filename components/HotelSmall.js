import Image from "next/image";
function HotelSmall({ rating, img, title, location, price }) {
  return (
    <div>
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" objectFit="cover" />
        <p>{rating}</p>
      </div>
      <div className="mt-4 font-poppins">
        <h3 className="font-bold">{title}</h3>
        <h4 className="text-sm text-gray-800">{location}</h4>
        <p className="text-xs font-medium mt-2">Starting From {price}</p>
      </div>
    </div>
  );
}

export default HotelSmall;
