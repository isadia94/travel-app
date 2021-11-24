import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="p-5 mt-4 bg-gray-300 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b border-black pb-4">
        <div className="font-poppins">
          <h4 className=" font-bold mb-6">Destinations</h4>
          <div className="text-sm flex flex-col space-y-3">
            <p>Africa</p>
            <p>The Americas</p>
            <p>Honduras</p>
            <p>Asia</p>
            <p>Mexico</p>
            <p>Dubai </p>
            <p>United States</p>
            <p>Kenya</p>
          </div>
        </div>
        <div className="font-poppins mt-7 sm:mt-0">
          <h4 className=" font-bold mb-6">Experiences</h4>
          <div className="text-sm flex flex-col space-y-3">
            <p>Adventure</p>
            <p>Food & Wine</p>
            <p>Culture</p>
            <p>Leisure</p>
            <p>Sun & Beach</p>
            <p>Winter Resorts </p>
            <p>Night Life & Ent</p>
          </div>
        </div>
        <div className="font-poppins mt-7 sm:mt-0">
          <h4 className=" font-bold mb-6">Others</h4>
          <div className="text-sm flex flex-col space-y-3">
            <p>Hotels</p>
            <p>Car Rentals</p>
            <p>Restaurants</p>
            <p>About Bonfire</p>
            <p>News & Blog</p>
            <p>Events</p>
          </div>
        </div>
        <div className="font-poppins mt-7 sm:mt-0">
          <h4 className=" font-bold mb-6">Subscribe</h4>
          <form>
            <div className="flex flex-col">
              <label for="name" className="mb-2">
                Your Name
              </label>
              <input
                className="border font-poppins font-medium border-gray-500 p-4 outline-none"
                type="text"
                required
              />
              <input
                placeholder="Your Email"
                className="border font-poppins font-medium border-gray-500 p-4 mt-2 outline-none"
                type="text"
                required
              />
            </div>
            <button className="mt-5 bg-yellow-500 w-[50%] p-2 md:p-5 font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5 font-poppins font-medium flex justify-between items-center">
        <h4>Bonfire Adventures</h4>
        <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer ">
          <div className="relative h-7 w-7 ">
            <Image src={twitter} layout="fill" objectFit="contain" />
          </div>
          <div className="relative h-7 w-7 ">
            <Image src={facebook} layout="fill" objectFit="contain" />
          </div>
          <div className="relative h-7 w-7 ">
            <Image src={youtube} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
