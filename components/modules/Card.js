import Link from "next/link";
import React from "react";
import Location from "../icons/SpaceX";
import Dollar from "../icons/Fast";

function Card({ id, name, price, details }) {
  const { Cuisine } = details[0];
  return (
    <div className="">
      <Link href={`/menu/${id}`}>
        <div className="border border-gray-300 rounded-xl p-2 space-y-3">
          <img src={`images/${id}.jpeg`} className="w-[200px] rounded-lg" />
          <div className="flex justify-between items-center">
            <div className="text-sm text-red-700">{name}</div>
            <div className="flex items-center">
              <Location />
              <p className="text-xs">{Cuisine}</p>
            </div>
          </div>
          <div className="flex">
            <Dollar />
            <p className="text-sm">{price}$</p>
          </div>
          <div
            href={`/menu/${id}`}
            className="bg-red-700  rounded-lg text-yellow-50 w-full text-center py-1.5"
            
          >
            See details
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
