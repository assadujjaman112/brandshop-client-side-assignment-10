import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import NoProduct from "./NoProduct";

const BrandDetails = () => {
  const products = useLoaderData();
  const { name } = useParams();
  const filteredProducts = products?.filter(
    (product) => product.brand === name
  );
  const SliderProduct = filteredProducts.slice(0, 3);
  return (
    <div>
      {filteredProducts.length > 0 && (
        <div>
          <div className="carousel w-full lg:h-[750px]">
            {SliderProduct.map((item, i) => (
              <div
                key={item._id}
                id={`slide${i}`}
                className="carousel-item relative w-full"
              >
                <img src={item.image} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${i - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${i + 1} `} className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-5 md:mt-10 lg:mt-16">
            All <span className="text-red-400">{name} </span>Products
          </h1>
        </div>
      )}

      <div className=" my-5 md:my-10 lg:my-16">
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
