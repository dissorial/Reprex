import React from "react";
import { Link } from "react-router-dom";
import ReactFreezeframe from "react-freezeframe";

const ExerciseCard = ({
  id,
  bodyPart,
  equipment,
  name,
  target,
  gifUrl,
  querytype,
}) => {
  const capitalize = (string) =>
    string.slice(0, 1).toUpperCase() + string.slice(1);
  const hyphenate = (string) => string.split(" ").join("-").toLowerCase();

  const exerciseName = encodeURIComponent(hyphenate(name));
  const exerciseTarget = encodeURIComponent(hyphenate(target));
  const exerciseBodyPart = encodeURIComponent(hyphenate(bodyPart));
  const exerciseEquipment = encodeURIComponent(hyphenate(equipment));
  const exerciseGif = encodeURIComponent(gifUrl);

  return (
    <div key={id} className="group relative p-4 sm:p-6">
      <Link
        to={`/exercise-detail/${exerciseBodyPart}/${exerciseEquipment}/${exerciseName}/${exerciseTarget}/${exerciseGif}`}
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
          <h3 className="text-xl font-medium text-gray-200">
            <a href={name}>{capitalize(name)}</a>
          </h3>

          <div className="flex flex-wrap gap-x-4 justify-center mt-2">
            {querytype !== "equipment" && (
              <span className="mt-3 items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-md font-medium text-pink-800">
                {capitalize(equipment)}
              </span>
            )}

            {querytype !== "bodyPart" && (
              <span className="mt-3 items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-md font-medium text-indigo-800">
                {capitalize(bodyPart)}
              </span>
            )}

            {querytype !== "target" && (
              <span className="mt-3 items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-md font-medium text-blue-800">
                {capitalize(target)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
