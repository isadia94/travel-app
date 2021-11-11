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
import Image from "next/image";

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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
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
            <h2 className="font-cookie text-2xl sm:3xl font-medium md:text-4xl">
              Recommended Destinations
            </h2>
            <Link href="/pages/destinations">
              <a className="text-xs font-poppins font-medium">See All</a>
            </Link>
          </div>
          <div className="flex overflow-scroll space-x-3 mt-8 ">
            {destinations.map((item) => (
              <DestinationsCard
                img={item.img}
                title={item.title}
                price={item.price}
                buttonText="Explore More"
              />
            ))}
          </div>
        </section>
        <section className="mt-[40px]">
          <h2 className="font-cookie text-2xl sm:3xl font-medium md:text-4xl">
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
            <h2 className="font-cookie text-2xl sm:3xl font-medium md:text-4xl">
              Car Rentals
            </h2>
            <Link href="/car-rentals">
              <a className="font-poppins text-xs font-medium text-gray-600">
                Explore More
              </a>
            </Link>
          </div>

          <div className=" md:flex md:overflow-scroll md:space-x-4">
            {cars.map((car) => (
              <CarCard img={car.img} title={car.title} price={car.price} />
            ))}
          </div>
        </section>
      </main>
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
          <div className="flex items-center space-x-2">
            <div className="relative h-7 w-7 ">
              <Image src={twitter} layout="fill" objectFit="contain" />
            </div>
            <div className="relative h-7 w-7 ">
              <Image src={facebook} layout="fill" objectFit="contain" />
            </div>
            <div className="relative h-7 w-7 ">
              <Image src={twitter} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
