import Footer from "./footer/Footer";


const Product = ({ product }) => {
  const { image, name, brand, type, price, rating } = product;
  return (
      <div className="bg-slate-200 rounded-lg h-[480px] my-5 md:my-10 lg:my-16">
        <div>
          <img className="w-full h-64 rounded-t-lg" src={image} alt="" />
        </div>
        <div className="ml-5 my-5">
          <h1 className="text-xl font-bold">Name : {name}</h1>
          <p className="font-bold">Brand Name : {brand}</p>
          <p className="font-bold">Type : {type}</p>
          <p className="font-bold">Price : {price}</p>
          <p className="font-bold">Rating : {rating}</p>
        </div>
        <div className="w-full">
          <button className="btn w-1/3 mx-5 bg-red-400 text-white hover:bg-red-600">
            Update
          </button>
          <button className="btn w-1/3 mx-5 bg-red-400 text-white hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
  );
};

export default Product;
