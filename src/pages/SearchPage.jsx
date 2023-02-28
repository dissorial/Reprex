import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs } from "../components";
import ReactFreezeframe from "react-freezeframe";

const SearchPage = () => {
  const { searchQuery } = useParams();
  const [allExercises, setAllExercises] = useState([]);
  const [exercisesPerPage] = useState(20);

  const navigation = [{ name: "Search", href: "", current: true }];
  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const data = await fetchData(
        `${exerciseDbUrl}/exercises`,
        exerciseOptions
      );
      setAllExercises(data);
    };
    fetchExercises();
  }, []);

  const capitalize = (string) =>
    string.slice(0, 1).toUpperCase() + string.slice(1);

  const searchedExercises = allExercises.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.target.toLowerCase().includes(searchQuery) ||
      item.equipment.toLowerCase().includes(searchQuery) ||
      item.bodyPart.toLowerCase().includes(searchQuery)
  );

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = searchedExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <path
            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
            fillOpacity=".2"
            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
          />
          <defs>
            <linearGradient
              id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
              x1="1220.59"
              x2="-85.053"
              y1="432.766"
              y2="638.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5" />
              <stop offset={1} stopColor="#80CAFF" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <div className="pt-10 pb-4 px-6">
            <Breadcrumbs navigation={navigation} />
          </div>
          <div className="pb-20 sm:pb-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Search results for
                  <span className="text-indigo-400"> {searchQuery}</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Click on any exercise card to view more details about the
                  exercise, and find other exercises that either use similar
                  equipment or target the same area.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {currentExercises.map(
              ({ bodyPart, equipment, gifUrl, id, name, target }) => (
                <div key={id} className="group relative p-4 sm:p-6">
                  <Link
                    to={`/exercise-detail/${encodeURIComponent(
                      bodyPart.replace(/ /g, "-")
                    )}/${encodeURIComponent(
                      equipment.replace(/ /g, "-")
                    )}/${encodeURIComponent(
                      name.replace(/ /g, "-")
                    )}/${encodeURIComponent(
                      target.replace(/ /g, "-")
                    )}/${encodeURIComponent(gifUrl.replace(/ /g, "-"))}`}
                  >
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 cursor-pointer">
                      <ReactFreezeframe
                        src={gifUrl}
                        alt={name}
                        options={{
                          trigger: "hover",
                        }}
                      />
                    </div>
                    <div className="pt-5 pb-4 text-center">
                      <h3 className="text-md font-medium text-gray-200">
                        <a href={name}>{capitalize(name)}</a>
                      </h3>

                      <div className="flex flex-wrap gap-x-4 justify-center mt-2">
                        <span className="mt-3 items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-pink-800">
                          {capitalize(equipment)}
                        </span>

                        <span className="mt-3 items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                          {capitalize(bodyPart)}
                        </span>

                        <span className="mt-3 items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                          {capitalize(target)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
