import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleSearchData }) => {
  const apiKey = "eae3475fec784b6b96b93501232409";
  const [text, setText] = useState("");

  const fetchData = async () => {
    if (text === "") {
      alert("na na na ana na ana na an");
    } else {
      const Sdata = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${text}`
      )
        .then((res) => res.json())
        .then((Sdata) => Sdata)
        .catch((error) => console.log(error));
      return Sdata;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(text);
    handleSearchData(data);
  };
  return (
    <div className="p-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 "
        action=""
      >
        <input
          onChange={(e) => setText(e.target.value)}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <button onClick={fetchData}>
          <CiSearch className="w-10 h-10" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
