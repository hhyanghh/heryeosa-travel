import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const Nav = () => {
  return (
    <header className="flex justify-between bg-beige border-b border-gray-300 p-2 items-center">
      <Link to="/">
        <img src="img/logo.png" className="w-32" />
      </Link>
      <div className="flex gap-4 items-center">
        <CustomLink link="/about" text="ABOUT" />
        <CustomLink link="/travels" text="TRAVEL" />
        <button className="bg-white text-lg px-4 py-1 rounded-3xl border-2 border-sea text-sea font-semibold">
          <Link to="/login">로그인</Link>
        </button>
      </div>
    </header>
  );
};

export default Nav;
