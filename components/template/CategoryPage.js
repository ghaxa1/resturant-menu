import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../modules/Card";
function CategoryPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();
  const OptionsHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    router.push({ pathname: "/categories", query });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
            DISCOVER YOUR NEXT MEAL
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900">
            Find Your Perfect Recipe
          </h1>

          <p className="text-gray-500 mt-4 text-base md:text-lg leading-7">
            Choose your preferences and discover a dish made for you.
          </p>

          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-6" />
        </div>

        {/* Filter Card */}
        <div className="relative overflow-hidden bg-white rounded-[30px] border border-orange-100 shadow-xl shadow-orange-100/50 p-6 md:p-10">
          {/* Decorative Background */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-orange-100/60 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-red-100/50 blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="mb-7">
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                Customize Your Search
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Filter recipes by difficulty and cooking time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Difficulty */}
              <div className="space-y-3">
                <label
                  htmlFor="difficulty"
                  className="flex items-center gap-2 text-sm font-bold text-gray-700"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-red-100 text-red-500">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z" />
                    </svg>
                  </span>
                  Difficulty Level
                </label>

                <select
                  id="difficulty"
                  value={query.difficulty}
                  name="difficulty"
                  onChange={OptionsHandler}
                  className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 font-medium outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 hover:border-orange-200 cursor-pointer"
                >
                  <option value="">All Difficulty Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Cooking Time */}
              <div className="space-y-3">
                <label
                  htmlFor="time"
                  className="flex items-center gap-2 text-sm font-bold text-gray-700"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-orange-100 text-orange-500">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  Cooking Time
                </label>

                <select
                  id="time"
                  value={query.time}
                  name="time"
                  onChange={OptionsHandler}
                  className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 font-medium outline-none transition-all duration-300 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 hover:border-orange-200 cursor-pointer"
                >
                  <option value="">Any Cooking Time</option>
                  <option value="less">Less than 30 minutes</option>
                  <option value="more">More than 30 minutes</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={searchHandler}
                className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 text-white font-bold shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200 active:translate-y-0"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>
                Search Recipes
              </button>

              <button
                type="button"
                onClick={() => setQuery({ difficulty: "", time: "" })}
                className="rounded-2xl border border-gray-200 bg-white px-6 py-4 text-gray-500 font-semibold transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
         <div className="flex flex-wrap mx-auto mt-7">
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
      </div>
     
    </div>
  );
}

export default CategoryPage;
