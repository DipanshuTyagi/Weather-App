import React from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { FaWind, FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const ShowData = ({ data }) => {
  const { location, current } = data;

  console.log(current);
  console.log(location);

  return (
    <div className="grid place-content-center text-center ">
      <div className="text-2xl">
        {location.name},{location.country}
      </div>
      <div className="text-gray-500">{location.localtime}</div>
      <div className="flex items-center m-auto">
        <img className="text-center" src={current.condition.icon} alt="" />
      </div>
      <div className="flex item-center m-auto">
        <div className="text-9xl">{current.temp_c}</div>
        <RiCelsiusFill />
      </div>
      <div className="flex items-center  justify-center gap-3 py-5">
        {/* Wind Speed in kph  */}
        <div className="border-r-2 px-2 flex flex-col items-center">
          <FaWind style={{ fontSize: "1.75rem" }} />
          <div className="">Wind Speed</div>
          <div className="">{current.wind_kph}</div>
        </div>

        {/* Humidity  */}
        <div className="border-r-2 px-2  flex flex-col items-center">
          <WiHumidity style={{ fontSize: "1.75rem" }} />
          <div className="">Humidity</div>
          <div className="">{current.humidity}</div>
        </div>

        {/* FeelsLike temp  */}
        <div className=" flex flex-col items-center ">
          <FaTemperatureLow style={{ fontSize: "1.75rem" }} />
          <div className="">FeelsLike Temp</div>
          <div className="">{current.feelslike_c}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
