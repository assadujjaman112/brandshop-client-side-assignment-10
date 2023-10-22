import { useLoaderData } from "react-router-dom";
import MyProductCart from "../components/MyProductCart";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyCart = () => {
  const {user} = useContext(AuthContext)
  const allProducts = useLoaderData();
  const filteredAllProduct = allProducts.filter(product => product.email ===user.email);
  const[myProducts, setMyProducts] = useState(filteredAllProduct)
  return (
    <div className="bg-red-50 py-5 md:py-10 lg:py-16">
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">
          My <span className="text-red-400">Products</span>{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7 md:my-10 lg:my-16">
          {myProducts?.map((product) => (
            <MyProductCart key={product._id} myProducts={myProducts} product={product} setMyProducts={setMyProducts}></MyProductCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
