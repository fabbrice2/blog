import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="flex py-10 items-center justify-between">
      <button
        className=" text-white p-1 flex items-center cursor-pointer"
        disabled={!hasPrevPage}
        onClick={() => {
          navigate(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Previous</span>
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className=" text-white p-1 flex items-center cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => {
          navigate(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <span>Next</span>
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PaginationControls;
