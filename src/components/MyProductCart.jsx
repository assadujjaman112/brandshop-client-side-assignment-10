import Swal from "sweetalert2";

const MyProductCart = ({ product, myProducts, setMyProducts }) => {
  const { _id, image, name, brand, price } = product;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-hla13wpfm-assadujjamans-projects.vercel.app/myCollection/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log(myProducts)
              const remaining = myProducts?.filter(
                (product) => product._id !== id
              );
              console.log(remaining)
              setMyProducts(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex gap-10 items-center bg-slate-100  rounded-lg h-64 shadow-lg">
        <div className="w-3/5">
          <img className="h-64 w-full rounded-l-lg " src={image} alt="" />
        </div>
        <div className="pr-5 w-2/5">
          <h1>
            <span className="font-bold">Name : </span>
            {name}
          </h1>
          <p>
            <span className="font-bold">Brand : </span> {brand}
          </p>
          <p>
            <span className="font-bold">Price : </span> {price}
          </p>
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-400 w-full mt-5 text-white hover:text-black"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCart;
