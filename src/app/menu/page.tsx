import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:px-20 xl:px-40">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative group h-64 bg-cover flex items-end justify-center"
          style={{ backgroundImage: `url(${category.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-opacity-60 bg-black w-full h-full absolute top-0 left-0 group-hover:bg-opacity-50 transition"></div>
          <div className="relative z-10 p-4 text-white text-center">
            <h1 className="uppercase font-bold text-2xl mb-4">{category.title}</h1>
            <p className="text-sm mb-4">{category.desc}</p>
            <button
              className={`bg-${category.color} text-white py-2 px-6 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
