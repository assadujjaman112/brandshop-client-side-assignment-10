import Swal from "sweetalert2";

const MyProductCart = ({ product }) => {
  const { _id, image, name, brand, price } = product;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/myCollection/${_id}`,{
            method : "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
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
          <img className="h-64 rounded-l-lg " src={image} alt="" />
        </div>
        <div className="pr-5">
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
