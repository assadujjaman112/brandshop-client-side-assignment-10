import Swal from "sweetalert2";
import Footer from "../components/footer/Footer";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = { image, name, brand, type, price, description, rating };
    console.log(newProduct);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Success!", "Product added successfully", "success");
        }
      });
  };
  return (
    <div>
      <div className="w-4/5 mx-auto bg-[#F4F3F0] p-10 mt-5 md:mt-10 lg:mt-16 rounded-md">
        <h1 className="text-center text-3xl font-bold mb-5">Add New Product</h1>
        <form onSubmit={handleAddProduct}>
          {/* Image and Name */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image url"
                  name="image"
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
                  placeholder="Type"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Price and Short Description */}
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
                  className="input rounded-lg input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input  input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Ration and Add Button */}
          <div className="md:flex mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input rounded-lg input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn mt-5 btn-block bg-red-400 text-white hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
