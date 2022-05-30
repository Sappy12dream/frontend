import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" w-full h-12 bg-cyan-200 flex items-center mx-auto px-5 font-bold">
      <Link to="/">Hospital Management System</Link>
    </div>
  );
}

export default Navbar;
