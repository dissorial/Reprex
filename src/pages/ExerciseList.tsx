import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard, Breadcrumbs, Pagination } from "../components";

type NavigationDictionary = {
  equipment: string;
  bodyPart: string;
  target: string;
};

export default function ExerciseList() {
  const { querytype, attribute } = useParams<{
    querytype: string;
    attribute: string;
  }>();
  const [exercises, setExercises] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [exercisesPerPage] = useState<number>(12);

  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const data = await fetchData(
        `${exerciseDbUrl}/exercises/${querytype}/${attribute}`,
        exerciseOptions
      );
      setExercises(data);
    };
    fetchExercises();
  }, []);

  const indexOfLastExercise: number = currentPage * exercisesPerPage;
  const indexOfFirstExercise: number = indexOfLastExercise - exercisesPerPage;
  const currentExercises: Array<any> = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const capitalize = (string: string) =>
    string.slice(0, 1).toUpperCase() + string.slice(1);

  const navigationDictionary = {
    equipment: "Equipment",
    bodyPart: "Body parts",
    target: "Target muscles",
  };

  const navigation = [
    {
      name:
        querytype && navigationDictionary.hasOwnProperty(querytype)
          ? navigationDictionary[querytype as keyof NavigationDictionary]
          : "",
      href: `/${querytype}`,
      current: false,
    },
    {
      name: attribute ? `${capitalize(attribute)}` : "",
      href: "",
      current: true,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-52">
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
        <h2 className="sr-only">Exercises</h2>

        <div className="pb-4 px-6">
          <Breadcrumbs navigation={navigation} />
        </div>
        <div className="pb-14 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {attribute ? capitalize(attribute) : ""} exercises
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Click on any exercise card to view more details about the
                exercise, and find other exercises that either use similar
                equipment or target the same area.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-px px-4 grid grid-cols-1 sm:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {currentExercises.map(
            ({ id, bodyPart, equipment, name, target, gifUrl }) => (
              <ExerciseCard
                key={id}
                id={id}
                bodyPart={bodyPart}
                equipment={equipment}
                name={name}
                target={target}
                gifUrl={gifUrl}
                querytype={querytype ? querytype : ""}
              />
            )
          )}
        </div>
        <Pagination
          exercisesPerPage={exercisesPerPage}
          totalExercises={exercises.length}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
