import { useLoaderData } from "react-router-dom";
import banner from "../../src/assets/images/banner.jpg";
import SingleBrand from "../components/SingleBrand";
import Footer from "../components/footer/Footer";
const Home = () => {
  const allBrands = useLoaderData();
  return (
    <div>
      <div>
        <div className="py-5 md:py-10 lg:py-16 bg-slate-100 mb-5 md:mb-10 lg:mb-16">
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
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ">
          All <span className="text-red-400">Brands</span>
        </h1>
        <p className="text-center w-11/12 md:w-4/6 mb-5 md:mb-10 lg:w-1/2 mx-auto">
          The technology industry, often referred to as tech, encompasses a
          diverse and dynamic range of companies and innovations that shape the
          way we live, work, and communicate in the modern world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-4/5 mx-auto">
          {allBrands.map((brand) => (
            <SingleBrand key={brand.id} brand={brand}></SingleBrand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
