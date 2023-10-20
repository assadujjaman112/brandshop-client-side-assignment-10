import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import NoProduct from "./Noproduct";

const BrandDetails = () => {
  const products = useLoaderData();
  const { name } = useParams();
  const filteredProducts = products?.filter(
    (product) => product.brand === name
  );
  console.log(filteredProducts);
  return (
    <div>
      <div className=" my-5 md:my10 lg:my16">
        {filteredProducts.length > 0 ? (
          <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        ) : (
          <div>
            <NoProduct></NoProduct>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
