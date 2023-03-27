import React from "react";
import { Link } from "react-router-dom";

interface Props {
  imageObject: { title: string; image: string };
  subpath: string;
}

const Category: React.FC<Props> = ({ imageObject, subpath }) => {
  return (
    <div className="text-center group cursor-pointer border p-10 m-4 rounded-xl hover:bg-gray-800">
      <Link to={`/${subpath}/${imageObject.title.toLowerCase()}`}>
        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-40 sm:h-40 group-hover:bg-teal-200">
          <img
            src={imageObject.image}
            alt="resistance band"
            className="w-20 h-20"
          />
        </div>
        <h6 className="mb-2 text-xl text-gray-300 font-bold leading-5 tracking-wider uppercase group-hover:text-teal-800">
          {imageObject.title}
        </h6>
      </Link>
    </div>
  );
};

export default Category;
