import React from "react";
import { Link } from "react-router-dom";

interface CardData {
  title: string;
  image: string;
}

interface Props {
  exerciseCardData: { [key: string]: CardData };
  subpath: string;
  title: string;
}

const HomeTeaser: React.FC<Props> = ({ exerciseCardData, subpath, title }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-10 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-200">{title}</h2>
          <Link
            to="/bodyPart"
            className="whitespace-nowrap text-md lg:text-lg font-medium text-indigo-500 hover:text-indigo-400"
          >
            View all
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {Object.values(exerciseCardData)
            .slice(0, 4)
            .map((card: CardData) => (
              <div key={card.title} className="group relative">
                <Link to={`/${subpath}/${card.title.toLowerCase()}`}>
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover object-center w-40 h-40 p-6 m-auto"
                    />
                    <div
                      className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <div className="w-full rounded-md bg-gray-900 bg-opacity-75 py-2 px-4 text-center text-lg font-medium text-gray-100 backdrop-blur backdrop-filter">
                        View exercises
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-200">
                    <h3 className="mx-auto text-xl">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {card.title}
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
};

export default HomeTeaser;
