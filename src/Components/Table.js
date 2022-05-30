function Table() {
  return (
    <div className="w-full h-full mt-5">
      <div className="grid grid-cols-12 gap-auto gap-5  border-b-2 border-gray-300">
        <div className=" font-bold uppercase col-span-1 ">Id</div>
        <div className=" font-bold uppercase col-span-2 ">Name</div>
        <div className=" font-bold uppercase col-span-1 ">Age</div>
        <div className=" font-bold uppercase col-span-1 ">Gender</div>
        <div className=" font-bold uppercase col-span-3 ">Address</div>
        <div className=" font-bold uppercase col-span-1">Contact</div>
        <div className=" font-bold uppercase col-span-1  text-center">
          Status
        </div>
        <div className=" font-bold uppercase col-span-2  text-center">
          Action
        </div>
      </div>
      <div className="grid grid-cols-12 gap-auto gap-5 mt-5">
        <div className=" col-span-1">1.</div>
        <div className=" col-span-2">Sapna Singh</div>
        <div className=" col-span-1">23</div>
        <div className=" col-span-1">Female</div>
        <div className=" col-span-3">Hno. 167 Braj, Karond Bhopal</div>
        <div className=" col-span-1">234657869</div>

        <div className=" col-span-1 text-center">Positive</div>
        <div className=" col-span-2 text-center flex items-center justify-around">
          <button className="bg-teal-700 py-1 px-2 rounded text-white ">
            Negative
          </button>
          <button className="bg-red-400 py-1 px-2 rounded text-white">
            Discharge
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
