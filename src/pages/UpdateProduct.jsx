
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, image, name, brand, type, price, rating } = product;
    console.log(product)

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const image = form.image.value;
        const name = form.name?.value;
        const brand = form.brand?.value;
        const type = form.type?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;
    
        const updatedProduct = {image,  name, brand, type, price, rating};
        console.log(name,updatedProduct);
    
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Success!", "Product Updated successfully", "success");
            }
          });
      };
  return (
    <div>
      <div className="w-4/5 mx-auto bg-[#F4F3F0] p-10 mt-5 md:mt-10 lg:mt-16 rounded-md">
        <h1 className="text-center text-3xl font-bold mb-5">Update A Product</h1>
        <form onSubmit={handleUpdateProduct}>
          {/* Image and Name */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Image url"
                  defaultValue={image}
                  className="input rounded-lg input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={name}
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Brand Name and Type */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Brand Name "
                  name="brand"
                  defaultValue={brand}
                  className="input rounded-lg input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Type"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Price and Rating*/}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={price}
                  className="input rounded-lg input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn mt-5 btn-block bg-red-400 text-white hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
