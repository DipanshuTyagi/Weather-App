import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowData from "../components/ShowData";

const HomePage = () => {
  const [searchData, setSearchData] = useState(null);
  const handleSearchData = (data) => {
    setSearchData(data);
  };

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-96 rounded-md h-auto pb-3">
      <SearchBar handleSearchData={handleSearchData} />

      {searchData && <ShowData data={searchData} />}
    </div>
  );
};

export default HomePage;
