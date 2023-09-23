import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleSearchText }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    handleSearchText(text);
  };

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
        <button>
          <CiSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
