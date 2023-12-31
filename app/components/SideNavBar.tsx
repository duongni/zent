import React from "react";
import { MdOutlineBeachAccess } from "react-icons/md";
import { PiMountainsLight } from "react-icons/pi";
import { BsWater } from "react-icons/bs";
import { PiCampfireLight } from "react-icons/pi";
import { GiWaterfall } from "react-icons/gi";
import { PiParkLight } from "react-icons/pi";

const SideNavBar = () => {
  const typeOfPlace = [
    {
      id: 1,
      icon: <PiParkLight size={40} />,
      name: "PARK",
    },
    {
      id: 2,
      icon: <PiMountainsLight size={40} />,
      name: "MOUNTAIN",
    },
    {
      id: 3,
      icon: <BsWater size={40} />,
      name: "LAKE",
    },
    {
      id: 4,
      icon: <PiCampfireLight size={40} />,
      name: "CAMPGROUND",
    },
    {
      id: 5,
      icon: <GiWaterfall size={40} />,
      name: "WATERFALLS",
    },
    {
      id: 6,

      icon: <MdOutlineBeachAccess size={40} />,
      name: "BEACH",
    },
  ];

  return (
    <div className="flex flex-col mt-[100px]  w-[80px] sticky text-xs border-r-1  shadow-md">
      {typeOfPlace.map((item) => (
        <div
          className=" flex flex-col justify-center items-center py-4 hover:text-gray-400"
          key={item.id}
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;
