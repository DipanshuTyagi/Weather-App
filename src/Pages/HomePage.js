import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowData from "../components/ShowData";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {});
  const handleSearchText = async (term) => {
    await setSearchData(term);
    console.log(searchData);
  };

  return (
    <div>
      <SearchBar handleSearchText={handleSearchText} />

      <ShowData data={searchData} />
    </div>
  );
};

export default HomePage;
