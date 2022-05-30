import React from "react";

function Add() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full mt-5">
      <h1 className="font-bold p-2">Add New Patient</h1>
      <form className="flex flex-col  p-5 rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
        />
        <div className="flex items-center gap-1">
          <input
            type="number"
            placeholder="Age"
            min="1"
            max="100"
            className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
          />
          <select
            name="Gender"
            className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <input
          type="address"
          placeholder="Address"
          className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
        />
        <input
          type="number"
          placeholder="Contact number"
          className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
          min="1000000000"
        />
        <select
          name="Status"
          className="w-full p-3 rounded bg-zinc-100 mb-2 outline-none"
        >
          <option value="Postive">Positive</option>
          <option value="Negative">Negative</option>
        </select>
        <input
          type="submit"
          value="Add"
          className="bg-emerald-300 px-2 py-1 rounded mt-2 "
        />
      </form>
    </div>
  );
}

export default Add;
