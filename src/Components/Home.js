import React, { useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
function Home() {
  const [Toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between h-full">
        <Link to="/add" className="bg-emerald-300 px-2 py-1 rounded mt-5 ">
          Add New
        </Link>
        <div className="relative">
          <button
            className="font-bold px-2 py-1 rounded mt-5 "
            onClick={() => setToggle(!Toggle)}
          >
            filter
          </button>
          <div
            className={
              Toggle
                ? " block absolute bg-white z-10 p-2 rounded right-0"
                : "hidden"
            }
          >
            <button onClick={() => setToggle(false)}>Postive</button>
            <button onClick={() => setToggle(false)}>Negative</button>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Home;
