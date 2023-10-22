import { useLoaderData } from "react-router-dom";
import banner from "../../src/assets/images/banner.jpg";
import SingleBrand from "../components/SingleBrand";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaLocationDot, FaUserGear, FaQuora } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
const Home = () => {
  const allBrands = useLoaderData();
  return (
    <div>
      <div>
        <div className="py-5 md:py-10 lg:py-16 bg-slate-100 mb-5 md:mb-10 lg:mb-16 dark:bg-slate-50">
          <div className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto justify-between items-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold">
                BUY NOW
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-400 font-extrabold">
                SUPER SALE
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold">
                LIMITED TIME OFFER
              </h2>
              <button className="btn bg-red-400 text-white hover:text-black">
                Buy now
              </button>
            </div>
            <div className="flex md:justify-end">
              <img className="md:w-4/5" src={banner} alt="" />
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-3 dark:text-white">
          All <span className="text-red-400">Brands</span>
        </h1>
        <p className="text-center w-11/12 md:w-4/6 mb-5 md:mb-10 lg:w-1/2 mx-auto dark:text-white">
          The technology industry, often referred to as tech, encompasses a
          diverse and dynamic range of companies and innovations that shape the
          way we live, work, and communicate in the modern world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-4/5 mx-auto">
          {allBrands.map((brand) => (
            <SingleBrand key={brand.id} brand={brand}></SingleBrand>
          ))}
        </div>
        <div className="my-5 md:my-10 lg:my-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-3 dark:text-white">
            Contact <span className="text-red-400">Us</span>
          </h1>
          <p className="text-center w-11/12 md:w-4/6 mb-5 md:mb-10 lg:w-1/2 mx-auto dark:text-white">
            If you would like to find out more about how can we help you, please
            give us a call or drop a email. We welcome your comments and
            suggestions about this website and/or any other issues that you wish
            to raise.
          </p>
          <div className="flex justify-evenly items-center w-11/12 md:w-4/5 mx-auto bg-red-50 py-20 px-16 rounded-lg">
            <p className="font-bold flex items-center gap-3">
              <AiOutlineMail className="text-2xl"></AiOutlineMail>{" "}
              gadgetgrove@gmail.com
            </p>
            <p className="font-bold flex items-center gap-3">
              <AiFillPhone className="text-2xl"></AiFillPhone> 01209783421
            </p>
            <p className="font-bold flex items-center gap-3">
              <FaLocationDot className="text-2xl"></FaLocationDot> Dhanmondi,
              Dhaka-1215
            </p>
          </div>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto my-5 md:my-10 lg:my-16">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5 lg:mb-8 dark:text-white">
            Supp<span className="text-red-400">ort</span>
          </h1>
          <div className="flex py-20 px-16 rounded-lg bg-red-50">
            <div>
              <div className="flex justify-center">
                <BiSupport className=" text-6xl mb-3"></BiSupport>
              </div>
              <h1 className="text-center font-bold">Customer Support</h1>
              <p className="text-center">
                Contact us via email, phone, live chat
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <BsShieldCheck className="text-center text-6xl mb-3"></BsShieldCheck>
              </div>
              <h1 className="text-center font-bold">Warranty</h1>
              <p className="text-center">
                Local Warranty policy protection is provided.
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <FaUserGear className="text-center text-6xl mb-3"></FaUserGear>
              </div>
              <h1 className="text-center font-bold">User Guides</h1>
              <p className="text-center">
                Find and download your product user guide
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <FaQuora className="text-center text-6xl mb-3"></FaQuora>
              </div>
              <h1 className="text-center font-bold">FAQ</h1>
              <p className="text-center">Search frequently asked questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
