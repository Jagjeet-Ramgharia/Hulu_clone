import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex flex-wrap px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 text-center">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500 p-3"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-tl from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
