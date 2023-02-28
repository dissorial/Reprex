import React from "react";
import ReactFreezeframe from "react-freezeframe";

const Similar = ({ title, exercises }) => {
  const capitalize = (string) =>
    string.slice(0, 1).toUpperCase() + string.slice(1);
  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-2 sm:px-2 py-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-100">
        {title}
      </h1>

      <div className="mt-2 border-b border-gray-700 pb-5 text-sm sm:flex sm:justify-between"></div>
      <div className="-mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map(({ id, name, target, bodyPart, equipment, gifUrl }) => (
          <div key={id} className="group relative p-4 sm:p-6">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200">
              <ReactFreezeframe
                src={gifUrl}
                alt={name}
                options={{
                  trigger: "hover",
                }}
              />
            </div>
            <div className="pt-5 pb-4 text-center">
              <h3 className="text-md font-bold text-gray-200">
                {capitalize(name)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similar;
