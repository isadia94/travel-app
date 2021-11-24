import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/solid";
function Header() {
  return (
    <div className="p-5 flex justify-between items-center bg-white  sticky top-0 z-30">
      <div>
        <h2 className="font-cookie text-3xl font-medium md:text-4xl">
          Bonfire Adventures
        </h2>
      </div>
      <div className="hidden lg:inline">
        <ul className=" flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/destinations">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                DESTINATIONS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/hotels">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                HOTELS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/car-rentals.js">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                CAR RENTALS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                EVENTS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-[13px] text-gray-600 font-poppins font-medium hover:underline">
                ABOUT US
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <button className="hidden lg:inline text-white bg-[#26AA2B] px-6 py-1 shadow-md rounded-full font-light  hover:shadow-xl active:scale-90 transition duration-150">
        Contact
      </button>
      <div className="lg:hidden">
        <MenuAlt3Icon className="h-6 w-6 md:h-8 md:w-8 " />
      </div>
    </div>
  );
}

export default Header;
