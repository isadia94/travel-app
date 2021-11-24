import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import hot1 from "../images/hot4.jpg";
import { UsersIcon } from "@heroicons/react/solid";
import HotelCard from "../components/HotelCard";
import Footer from "../components/Footer";
import Map from "../components/Map";

function hotels() {
  return (
    <div>
      <Head>
        <title>Best hotels</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=Philosopher:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div className="relative z-10 h-[200px] lg:h-[450px]">
        <Image src={hot1} layout="fill" objectFit="cover" />
      </div>
      <div className="font-poppins p-5 bg-white shadow-2xl rounded-2xl ">
        <form className="lg:flex lg:justify-between">
          <div className="flex  flex-col ">
            <label for="city" className=" text-[12px] text-gray-500">
              City
            </label>
            <input
              type="text"
              className="outline-none border-b border-gray-400"
            ></input>
          </div>
          <div className="mt-4 flex justify-between items-center">
            {/* implement date range picker */}
            <div className="flex flex-col">
              <input className="font-bold" value="18 July - 24 July"></input>
              <label for="city" className=" text-[12px] text-gray-500">
                6 Nights
              </label>
            </div>
            <div className="flex space-x-2">
              <UsersIcon className="h-6" />
              <input
                type="number"
                className="w-[30px] outline-none border-b border-gray-400 "
              ></input>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center relative ">
            <button className=" lg:inline text-white bg-[#26AA2B] px-6 py-2 shadow-md rounded-full font-light  hover:shadow-xl active:scale-90 transition duration-150">
              Search
            </button>
          </div>
        </form>
      </div>

      <main className="mt-4 px-5 font-poppins font-semibold flex justify-between">
        <section>
          <h2 className="md:font-philosopher md:text-4xl">Hotels Near You</h2>
          <div className="mt-2">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[600px]">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default hotels;
