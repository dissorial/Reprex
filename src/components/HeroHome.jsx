import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import gym_image from "../assets/gym_image.png";

const HeroHome = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <section className="pt-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          className="px-8 py-20 bg-gray-800 overflow-hidden rounded-3xl relative"
          style={{
            backgroundImage: `url(${gym_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="md:max-w-2xl text-center mx-auto">
            <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
              TRANSFORM YOUR BODY
            </span>
            <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
              <span>Discover </span>
              <span className="text-transparent bg-clip-text bg-gradient-orange-light">
                hundreds
              </span>
              <span> of exercises.</span>
            </h1>
            <p className="mb-8 text-xl text-gray-500 font-bold">
              Find the perfect workouts for your goals and level, anytime,
              anywhere.
            </p>
            <form className="w-2/3 mx-auto mt-24" autoComplete="off">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  name="default-search"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  id="default-search"
                  className="block active:ring-1 focus:ring-1 ring-indigo-500 w-full p-4 pl-10 text-sm text-white border border-black rounded-lg bg-gray-500 bg-opacity-80 placeholder-gray-200 outline-none"
                  placeholder="Search for exercises..."
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-opacity-50 focus:ring-1 focus:outline-none focus:ring-indigo-800 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
