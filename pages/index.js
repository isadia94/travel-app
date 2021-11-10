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
import Img7 from "../images/hot2.jpg";
import Img8 from "../images/hot3.jpg";
import HotelSmall from "../components/HotelSmall";

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
      img: Img7,
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
            <h2 className="font-cookie text-3xl font-medium md:text-4xl">
              Recommended Destinations
            </h2>
            <Link href="/pages/destinations">
              <a>See All</a>
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
          <h2 className="font-cookie text-3xl font-bold md:text-4xl">
            Amazing Stays
          </h2>
          <div className="mt-4">
            <h3 className="font-poppins font-medium text-blue-800">
              More than just hotels
            </h3>
            <p className="hidden lg:inline font-poppins mt-2 text-sm font-medium text-gray-600">
              Discover Pure comfort with homes & apartments
            </p>
            <div className="flex mt-12 space-x-3">
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
          </div>
        </section>
      </main>
    </div>
  );
}
