import React from "react";
import Link from "next/link";

const categories = [{ name: "Javascript" }, { name: "React" }, { name: "Web" }];

const Navbar = () => {
  return (
    <div className="container mx-auto p-2 lg:px-20">
      <div className="flex items-center justify-between w-full border-b border-blue-400 py-4 md:py-8">
        <div className="md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-sm md:text-2xl  uppercase text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden  md:flex items-center gap-10">
          {categories.map((category, index) => (
            <Link href={`/category/${category.name}`} key={index}>
              <span className="cursor-pointer font-semibold text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
