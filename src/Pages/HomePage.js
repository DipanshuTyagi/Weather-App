import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowData from "../components/ShowData";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {});
  const handleSearchText = async (term) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0463341a1ad442d9a5d104353232309&q=${term}&aqi=no`
    );
    const result = await response.json();

    // const result = await SearchData(term);

    setSearchData(result);
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
