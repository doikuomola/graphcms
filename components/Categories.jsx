import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((result) => {
        setCategories(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8  mb-12">
      <h4 className="text-center font-semibold text-sm lg:text-2xl pb-4">
        Categories
      </h4>
      {categories.map((category, i) => (
        <Link href={`/category/${category.slug}`} key={i}>
          <span
            className={`ml-6 mb-3 pb-3 block ${
              i === categories.length - 1 ? "border-b-0" : "border-b"
            }  cursor-pointer hover:font-semibold hover:text-blue-600 duration-500 transition `}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
