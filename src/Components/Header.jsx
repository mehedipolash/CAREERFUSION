import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 pt-3">
      <img className="w-[200px]" src={logo} alt="" />
      <p className="text-accent">Discover your next move</p>
      <p className="font-semibold">
        {format(new Date(), "EEEE , MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
