import Image from "next/image";
function CarCard({ img, title, price }) {
  return (
    <div className=" cursor-pointer mt-4 border-b relative border-black md:flex md:items-center md:space-x-2 md:border-none">
      <div className="relative h-40 md:h-60 md:w-60 flex-grow">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <div className="mt-4 mb-4">
        <h3 className="font-poppins font-extrabold">{title}</h3>
        <div className="flex items-center space-x-2">
          <p className="font-poppins text-sm font-medium">KES {price}</p>
          <p className="font-poppins text-xs font-medium text-gray-500">
            Per day
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
