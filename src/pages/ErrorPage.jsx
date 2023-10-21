import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-5xl text-red-400 text center mb-3">
          No Page Found . . .
        </h1>
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn bg-red-400 text-white hover:text-black">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
