import React from "react";

interface Props {
  exercisesPerPage: number;
  totalExercises: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<Props> = ({
  exercisesPerPage,
  totalExercises,
  currentPage,
  handlePageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="text-center space-y-2 pt-10">
      <div className="btn-group mx-auto flex flex-wrap justify-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={
              number === currentPage
                ? "py-4 px-5 bg-blue-800 text-gray-200 mb-4"
                : "py-4 px-5 bg-gray-800 text-gray-200 hover:bg-gray-700 mb-4"
            }
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
