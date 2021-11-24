import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import DestinationsCard from "../components/DestinationsCard";
import Header from "../components/Header";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";
import Img6 from "../images/hot1.jpg";
import Img7 from "../images/hot3.jpg";
import Img8 from "../images/hot2.jpg";
import Car1 from "../images/car1.png";
import Car2 from "../images/car2.png";
import Car3 from "../images/car3.png";
import Car4 from "../images/car6.jpg";
import Car5 from "../images/car5.jpg";
import HotelSmall from "../components/HotelSmall";
import HotelLarge from "../components/HotelLarge";
import CarCard from "../components/CarCard";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  const destinations = [
    {
      title: "Dubai",
      price: "3,500",
      img: Img2,
    },
    {
      title: "Chille",
      price: "4,580",
      img: Img3,
    },
    {
      title: "Maldives",
      price: "2,600",
      img: Img4,
    },
    {
      title: "Kenya",
      price: "1,200",
      img: Img5,
    },
    {
      title: "Dubai",
      price: "3,500",
      img: Img2,
    },
  ];

  const hotels = [
    {
      rating: 9.5,
      title: "Villa Rosa",
      price: 4300,
      location: "Nairobi",
      img: Img6,
    },
    {
      rating: 8.2,
      title: "Kempinski",
      price: 12000,
      location: "Nairobi",
      img: Img8,
    },
  ];
  const cars = [
    {
      title: "Land Cruiser",
      img: Car1,
      price: "10,000",
    },
    {
      title: "Prado",
      img: Car2,
      price: "12,000",
    },
    {
      title: "Land Cruiser Tour",
      img: Car3,
      price: "8,000",
    },
    {
      title: "Nissan",
      img: Car4,
      price: "5,600",
    },
  ];
  return (
    <div className="">
      <Head>
        <title>Traveloo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=Philosopher:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header />
        <Banner />
      </div>

      <main className="p-5 mt-4">
        <section>
          <div className="flex items-center justify-between">
            <h2 className="font-philosopher text-2xl sm:3xl font-medium md:text-4xl">
              Recommended Destinations
            </h2>
            <Link href="/pages/destinations">
              <a className="text-xs font-poppins font-medium">See All</a>
            </Link>
          </div>
          <div className="flex overflow-scroll scrollbar-hide space-x-3 mt-8 ">
            {destinations.map((item) => (
              <DestinationsCard
                img={item.img}
                title={item.title}
                price={item.price}
                buttonText="Explore"
              />
            ))}
          </div>
        </section>
        <section className="mt-[40px]">
          <h2 className="font-philosopher text-2xl sm:3xl font-medium md:text-4xl">
            Amazing Stays
          </h2>
          <div className=" sm:mt-3 lg:grid lg:grid-cols-2">
            <div>
              <h3 className="font-poppins text-sm font-medium text-blue-800">
                More than just hotels
              </h3>
              <p className="hidden lg:inline font-poppins mt-2 text-sm font-medium text-gray-600">
                Discover Pure comfort with homes & apartments
              </p>
              <div className="w-[100%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 ">
                  {hotels.map((hotel) => (
                    <HotelSmall
                      img={hotel.img}
                      rating={hotel.rating}
                      title={hotel.title}
                      location={hotel.location}
                      price={hotel.price}
                    />
                  ))}
                </div>
                <button className="hidden lg:inline bg-yellow-500 w-[99%] font-poppins p-5 text-black font-bold">
                  Explore More
                </button>
              </div>
            </div>

            <div className="">
              <HotelLarge
                img={Img7}
                title="Panari"
                location="Mombasa"
                price="2400"
                rating="9.9"
              />
            </div>
            <button className="lg:hidden bg-yellow-500 w-[99%] font-poppins p-2 md:p-5 text-black font-bold">
              Explore More
            </button>
          </div>
        </section>
        <section className="mt-6">
          <div className="flex items-center space-x-8">
            <h2 className="font-philosopher text-2xl sm:3xl font-medium md:text-4xl">
              Car Rentals
            </h2>
            <Link href="/car-rentals">
              <div className="flex items-center space-x-1">
                <a className="font-poppins text-xs font-medium text-gray-600">
                  Explore More
                </a>
                <ArrowRightIcon className="h-4 text-gray-600" />
              </div>
            </Link>
          </div>

          <div className=" md:flex md:overflow-scroll scrollbar-hide md:space-x-4">
            {cars.map((car) => (
              <CarCard img={car.img} title={car.title} price={car.price} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
