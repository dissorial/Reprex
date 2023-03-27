import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

interface Props {
  data: { [key: string]: { title: string; image: string } };
  title: string;
  subpath: string;
}

interface NavigationDictionary {
  equipment: string;
  bodyPart: string;
  target: string;
}

export default function MainPageContent({ data, title, subpath }: Props) {
  const navigationDictionary: NavigationDictionary = {
    equipment: "Equipment",
    bodyPart: "Body part",
    target: "Target muscles",
  };
  const navigation = [
    {
      name: `${navigationDictionary[subpath as keyof NavigationDictionary]}`,
      href: `/${subpath}`,
      current: false,
    },
  ];
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
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
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Breadcrumbs navigation={navigation} />
        <div className="pb-20 sm:pb-16"></div>
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {Object.values(data).map((item) => (
            <div key={item.title} className="group relative">
              <Link to={`/${subpath}/${item.title.toLowerCase()}`}>
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover object-center w-40 h-40 p-6 m-auto"
                  />
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="w-full rounded-md bg-gray-900 bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-100 backdrop-blur backdrop-filter">
                      View exercises
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-200">
                  <h3 className="mx-auto">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
