import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ShowData from "./ShowData";

const SearchBar = ({ handleSearchText }) => {
  const apiKey = "eae3475fec784b6b96b93501232409";
  const [text, setText] = useState("");
  const [wether, setWether] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    handleSearchText(text);
  };
  async function fetchData(e) {
    e.preventDefault();
    if (text === "") {
      alert("enter something");
    } else {
      const data = fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${text}`
      )
        .then((res) => res.json())
        .then((data) => data);

      console.log(data);
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
      {wether.data !== undefined ? <ShowData value={wether.data} /> : null}
    </div>
  );
};

export default SearchBar;
