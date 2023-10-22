import { Link } from "react-router-dom";

const SingleBrand = ({ brand }) => {
  const { name, img } = brand;
  return (
    <Link to={`/brands/${name}`}>
      <div className="bg-slate-200 rounded-lg px-5 py-8 h-[400px] shadow-md dark:bg-slate-100">
        <div className="h-4/5 w-full flex items-center">
          <img src={img} alt="" />
        </div>
        <h1 className="text-4xl font-extrabold mt-10  text-center">{name}</h1>
      </div>
    </Link>
  );
};

export default SingleBrand;
