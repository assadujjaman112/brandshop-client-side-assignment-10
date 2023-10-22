import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product;
  return (
    <div className="bg-slate-200 rounded-lg h-[480px]">
      <div>
        <img className="w-full h-64 rounded-t-lg" src={image} alt="" />
      </div>
      <div className="ml-5 my-5">
        <h1 className="text-xl md:text-sm lg:text-xl font-bold">Name : {name}</h1>
        <p className="font-bold">Brand Name : {brand}</p>
        <p className="font-bold">Type : {type}</p>
        <p className="font-bold">Price : {price}</p>
        <p className="font-bold">Rating : {rating}</p>
      </div>
      <div className="w-full">
        <Link to={`/updateProduct/${_id}`}>
          <button className="btn w-1/3 mx-5 bg-red-400 text-white hover:bg-red-600">
            Update
          </button>
        </Link>
        <Link to={`/productDetails/${_id}`}>
          <button className="btn w-1/3 mx-5 bg-red-400 text-white hover:bg-red-600">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
