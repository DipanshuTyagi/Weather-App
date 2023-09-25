import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleSearchText }) => {
  const apiKey = "eae3475fec784b6b96b93501232409";
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  async function fetchData(e) {
    e.preventDefault();
    if (text === "") {
      alert("enter something");
    } else {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${text}`
      )
        .then((res) => res.json())
        .then((data) => data);

      handleSearchText(data);
    }
  }
  return (
    <div className="grid place-content-center p-10">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
        action=""
      >
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="border"
        />
        <button onClick={fetchData}>
          <CiSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
