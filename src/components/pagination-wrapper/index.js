import { Pagination } from "@nextui-org/react";
import { useState } from "react";

const PaginationWrapper = ({ data, itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = data?.slice(startIdx, endIdx);

  return (
    <div>
      <div>{children(currentItems)}</div>
      {totalItems ? (
        <div className="border-t border-[#292929]">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
            <p>
              Showing {startIdx + 1} to {Math.min(endIdx, totalItems)} of{" "}
              {totalItems}
            </p>
            <Pagination
              classNames={{
                item: "rounded-none bg-transparent text-white rounded-md border border-[#292929] [&[data-hover=true]:not([data-active=true])]:bg-transparent data-[active=true]:bg-[#292929] data-[active=true]:border-none",
                cursor: "rounded-none",
              }}
              disableCursorAnimation
              total={totalPages}
              initialPage={1}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaginationWrapper;
