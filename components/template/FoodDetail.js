import React from "react";

import Location from "../icons/SpaceX";

function FoodDetail({
  id,
  name,
  price,
  introduction,
  details,
  ingredients,
  recipe,
}) {
  return (
    <div className="max-w-[1100px] mx-auto my-24 px-5 space-y-10">
      {/* Food Header */}
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-red-50 via-white to-orange-50 border border-red-100 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* Image */}
          <div className="relative shrink-0 group">
            <img
              src={`/images/${id}.jpeg`}
              className="w-full md:w-[360px] h-[280px] md:h-[300px] object-cover rounded-[24px] shadow-lg transition duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Price */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg">
              <span className="text-xl font-black text-red-600">{price}$</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center flex-1 py-2">
            <span className="text-sm font-bold uppercase tracking-[3px] text-red-500">
              Chef's Special
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              {name}
            </h1>

            <div className="flex items-center gap-2 mt-5 text-gray-500">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                <Location />
              </div>

              <span className="font-medium">{details[0].Cuisine}</span>
            </div>

            <div className="w-16 h-1 bg-red-500 rounded-full mt-6" />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="relative bg-white rounded-[26px] p-7 md:p-9 border border-gray-100 shadow-lg">
        <div className="absolute left-0 top-8 bottom-8 w-1.5 bg-red-500 rounded-r-full" />

        <p className="text-gray-600 text-lg leading-8 pl-4">{introduction}</p>
      </div>

      {/* Details */}
      <div className="bg-white rounded-[26px] p-7 md:p-9 border border-gray-100 shadow-lg">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-xl font-bold">
            i
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">Details</h2>

            <p className="text-sm text-gray-400 mt-1">
              Everything you need to know
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {details.map((item, index) => {
            const [key, value] = Object.entries(item)[0];

            return (
              <div
                key={index}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-gray-50 border border-gray-100 px-5 py-4 transition duration-300 hover:bg-red-50 hover:border-red-100 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition" />

                  <span className="text-gray-500 font-medium">{key}</span>
                </div>

                <span className="font-bold text-gray-900">{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[26px] p-7 md:p-9 shadow-xl">
        <div className="mb-7">
          <span className="text-red-400 text-sm font-bold uppercase tracking-[3px]">
            What's inside
          </span>

          <h2 className="text-3xl font-black text-white mt-2">Ingredients</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {ingredients.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 py-3 border-b border-white/10 group"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-red-400 shrink-0 group-hover:scale-150 transition" />

              <span className="text-gray-300 leading-7 group-hover:text-white transition">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Recipe */}
      <div className="bg-white rounded-[26px] p-7 md:p-9 border border-gray-100 shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-xl font-bold">
            #
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900">Recipe</h2>

            <p className="text-sm text-gray-400 mt-1">
              Step by step preparation
            </p>
          </div>
        </div>

        <ol className="space-y-4">
          {recipe.map((item, index) => (
            <li
              key={item}
              className="group flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-5 transition duration-300 hover:bg-orange-50 hover:border-orange-100 hover:-translate-y-1"
            >
              {/* Step Number */}
              <span className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center font-black shadow-md group-hover:scale-110 transition">
                {index + 1}
              </span>

              {/* Recipe Text */}
              <span className="text-gray-600 leading-7 pt-1 group-hover:text-gray-900 transition">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FoodDetail;
