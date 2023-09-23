import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchData from "../api";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);

  const handleSearchText = async (term) => {
    const result = await SearchData(term);

    setSearchData(result);
    console.log(searchData);
  };

  return (
    <div>
      <SearchBar handleSearchText={handleSearchText} />
    </div>
  );
};

export default HomePage;
