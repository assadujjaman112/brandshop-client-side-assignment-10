import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/5 pb-5 mx-auto mb-5 md:mb-8 lg:mb-16 bg-slate-100 rounded-lg">
      <div>
        <img
          className="md:h-[650px] w-full rounded-t-lg  mx-auto"
          src={data.image}
          alt=""
        />
      </div>
      <div className="pl-6 pb-6 my-5">
        <h1 className="font-bold">Name : {data.name}</h1>
        <p>
          <span className="font-semibold">Brand :</span> {data.brand}
        </p>
        <p>
          <span className="font-semibold">Description :</span>{" "}
          {data.description}
        </p>
        <p>
          <span className="font-semibold">Price :</span> {data.price}
        </p>
      </div>
      <div className="w-4/5 mx-auto">
        <button className="btn w-full bg-red-400 text-white hover:text-black">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
